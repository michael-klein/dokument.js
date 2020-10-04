import { getFile, getJSON, join, getHeaders } from './file_utils';
import removeMarkdown from 'remove-markdown';
import { addDocument } from '../store/docStore';
import {
  DocumentHeading,
  Navbar,
  NavbarJSON,
  NavbarItemType,
  DocumentData,
} from './document_interfaces';

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
        slug: slugify(title),
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
): Promise<void> {
  for (const title of Object.keys(navbar)) {
    const { slug, children, type, path } = navbar[title];
    if (type === NavbarItemType.CATEGORY) {
      await fetchDocuments(rootPath, children);
    } else {
      const docPath: string = join(rootPath, path);
      const document: DocumentData = JSON.parse(localStorage.getItem(slug));
      let headers: Headers;
      try {
        headers = await getHeaders(docPath);
      } catch (e) {}
      const lastModified: string = headers && headers.get('last-modified');

      let lastModifiedTimestamp: number = -1;
      if (lastModified) {
        lastModifiedTimestamp = new Date(lastModified).getTime();
      }
      if (document) {
        if (document.lastModified === lastModifiedTimestamp) {
          await addDocument(document);
          continue;
        }
      }
      try {
        const content: string = await getFile(docPath);
        const document = {
          title,
          content,
          path: docPath,
          slug,
          headings: findHeadings(content),
          lastModified: lastModifiedTimestamp,
        };
        localStorage.setItem(document.slug, JSON.stringify(document));
        await addDocument(document);
      } catch (e) {}
    }
  }
}
