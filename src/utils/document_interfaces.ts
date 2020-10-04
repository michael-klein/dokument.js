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
  headings?: DocumentHeading[];
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
  lastModified: number;
}
export interface DocumentMap {
  [slug: string]: DocumentData;
}
