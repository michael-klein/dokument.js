import { getFile, getJSON, join } from './file_utils';
import removeMarkdown from 'remove-markdown';

export interface DocumentProvider {
  getDocument(id: string): string;
  getDocumentMap(): DocumentMap;
}

export interface NavbarJSON {
  [key: string]: string | NavbarJSON;
}

export enum NavbarItemType {
  CATEGORY,
  DOCUMENT,
}
export interface NavbarItem {
  type: NavbarItemType;
  path?: string;
  slug?: string;
  children?: Navbar;
}

export interface Navbar {
  [title: string]: NavbarItem;
}

export interface DocumentHeading {
  size: number;
  text: string;
  raw: string;
  slug: string;
}
export interface DocumentData {
  title: string;
  path: string;
  slug: string;
  content: string;
  headings: DocumentHeading[];
}
export interface DocumentMap {
  [slug: string]: DocumentData;
}

export function findHeadings(document: string): DocumentHeading[] {
  const parts: string[] = document.split(/\n/g);
  const headings: DocumentHeading[] = [];
  let i: number = 0;
  for (const part of parts) {
    if (part.trim()[0] === '#') {
      let size: number = 1;
      while (part[size] && part[size] === '#') {
        size++;
      }
      let text: string = removeMarkdown(part);
      text = text.trim();
      headings.push({
        size,
        text,
        raw: part,
        slug: `${i}-${slugify(text)}`,
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
    if (typeof entry === 'object') {
      navbar[title] = {
        type: NavbarItemType.CATEGORY,
        children: buildNavbar(entry),
      };
    } else {
      const slug: string = slugify(entry);
      navbar[title] = {
        type: NavbarItemType.DOCUMENT,
        slug: slug,
        path: entry,
      };
    }
  }
  return navbar;
}

export async function fetchNavbar(path: string): Promise<Navbar> {
  const navbarJSON: NavbarJSON = await getJSON<NavbarJSON>(
    join(path, 'navbar.docs.json')
  );
  return buildNavbar(navbarJSON);
}

export function slugify(path: string): string {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return path
    .toString()
    .toLowerCase()
    .replace(/.mdx/g, '')
    .replace(/\s+/g, '-')
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export async function fetchDocuments(
  rootPath: string,
  navbar: Navbar
): Promise<DocumentMap> {
  let documentMap: DocumentMap = {};

  for (const title of Object.keys(navbar)) {
    const { slug, children, type, path } = navbar[title];
    if (type === NavbarItemType.CATEGORY) {
      const subResult: DocumentMap = await fetchDocuments(rootPath, children);
      documentMap = { ...documentMap, ...subResult };
    } else {
      const docPath: string = join(rootPath, path);
      const content: string = await getFile(docPath);
      documentMap[slug] = {
        title,
        content,
        path: docPath,
        slug,
        headings: findHeadings(content),
      };
    }
  }

  return documentMap;
}
