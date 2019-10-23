export interface DocumentProvider {
    getDocument(id: string): string;
    getDocumentMap(): DocumentMap;
}
export interface NavbarJSON {
    [key: string]: string | NavbarJSON;
}
export declare enum NavbarItemType {
    CATEGORY = 0,
    DOCUMENT = 1
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
    lastModified: number;
}
export interface DocumentMap {
    [slug: string]: DocumentData;
}
export declare function findHeadings(document: string): DocumentHeading[];
export declare function buildNavbar(navbarJSON: NavbarJSON): Navbar;
export declare function fetchNavbar(path: string): Promise<Navbar>;
export declare function slugify(path: string): string;
export declare function fetchDocuments(rootPath: string, navbar: Navbar): Promise<DocumentMap>;
