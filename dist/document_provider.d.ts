export interface DocumentProvider {
    getDocument(id: string): string;
    getDocumentMap(): DocumentMap;
}
export interface Navbar {
    [key: string]: string | Navbar;
}
export interface DocumentHeading {
    size: number;
    text: string;
    raw: string;
}
export interface Document {
    title: string;
    path: string;
    content: string;
    headings: DocumentHeading[];
}
export interface DocumentMap {
    [slug: string]: Document;
}
export declare function findHeadings(document: string): DocumentHeading[];
export declare function fetchNavbar(path: string): Promise<Navbar>;
export declare function slugify(path: string): string;
export declare function getDefaultDocumentProvider(rootPath: string): Promise<DocumentProvider>;
