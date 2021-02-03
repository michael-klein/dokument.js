import { getFile, getJSON, join, getHeaders } from "./file_utils";
import removeMarkdown from "remove-markdown";
import {
  DocumentHeading,
  Navbar,
  NavbarJSON,
  NavbarItemType,
  DocumentData,
  SidebarItem
} from "./document_interfaces";
import { docs } from "../state/docs";

function findHeadings(document: string): DocumentHeading[] {
  const parts: string[] = document.split(/\n/g);
  const headings: DocumentHeading[] = [];
  let i: number = 0;
  for (const part of parts) {
    if (part.trim()[0] === "#") {
      let size: number = 1;
      while (part[size] && part[size] === "#") {
        size++;
      }
      let text: string = removeMarkdown(part);
      text = text.trim();
      headings.push({
        size,
        text,
        raw: part,
        slug: `${i}-${slugify(text)}`
      });
      i++;
    }
  }
  return headings;
}

export function buildNavbar(navbarJSON: NavbarJSON): Navbar {
  let navbar: Navbar = {};
  for (const title of Object.keys(navbarJSON)) {
    const entry: string | NavbarJSON = navbarJSON[title];
    if (typeof entry === "object") {
      navbar[title] = {
        type: NavbarItemType.CATEGORY,
        children: buildNavbar(entry),
        slug: slugify(title)
      };
    } else {
      const slug: string = slugify(entry);
      navbar[title] = {
        type: NavbarItemType.DOCUMENT,
        slug: slug,
        path: entry
      };
    }
  }
  return navbar;
}

export async function fetchNavbar(
  rootPath: string,
  navbarPath: string
): Promise<Navbar> {
  const navbarJSON: NavbarJSON = await getJSON<NavbarJSON>(
    join(join(rootPath, navbarPath), "navbar.docs.json")
  );
  return buildNavbar(navbarJSON);
}

export function slugify(path: string): string {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return path
    .toString()
    .toLowerCase()
    .replace(/.mdx/g, "")
    .replace(/\s+/g, "-")
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
let fetching = false;

const documentQueue: string[] = [];
const documentsToFetch = new Map<string, { title: string } & SidebarItem>();
const fetchingDocuments: string[] = [];

export const fetchDocumentNow = async (rootPath: string, path: string) => {
  if (documentQueue.includes(path) && !fetchingDocuments.includes(path)) {
    fetchingDocuments.push(path);
    documentQueue.splice(documentQueue.indexOf(path), 1);
    const { title, slug } = documentsToFetch.get(path);
    documentsToFetch.delete(path);
    const docPath = join(rootPath, path);
    try {
      let document: DocumentData = docs.getState().documents?.[slug];
      let headers: Headers;
      try {
        headers = await getHeaders(docPath);
      } catch (e) {}
      const lastModified: string = headers && headers.get("last-modified");

      let lastModifiedTimestamp: number = -1;
      if (lastModified) {
        lastModifiedTimestamp = new Date(lastModified).getTime();
      }
      if (document) {
        if (document.lastModified === lastModifiedTimestamp) {
          docs.getState().addDocument(document);
          docs
            .getState()
            .addHeadingsToNavbarItem(document.slug, document.headings);
          return;
        }
      }
      const content: string = await getFile(docPath);
      document = {
        title,
        content,
        path: path,
        slug,
        headings: findHeadings(content),
        lastModified: lastModifiedTimestamp
      };
      docs.getState().addDocument(document);
      docs.getState().addHeadingsToNavbarItem(document.slug, document.headings);
    } catch (e) {}
    fetchingDocuments.splice(fetchingDocuments.indexOf(path), 1);
  }
};

const fetchDocuments = async (rootPath: string) => {
  fetching = true;
  while (documentQueue.length > 0) {
    await fetchDocumentNow(rootPath, documentQueue[0]);
  }
  fetching = false;
};

export const qeueDocuments = (rootPath: string, navbar: Navbar) => {
  for (const label of Object.keys(navbar)) {
    const { children, type, path } = navbar[label];
    if (type === NavbarItemType.CATEGORY) {
      qeueDocuments(rootPath, children);
    } else {
      documentsToFetch.set(path, { title: label, ...navbar[label] });
      documentQueue.push(path);
    }
  }
  if (!fetching) {
    fetchDocuments(rootPath);
  }
};
