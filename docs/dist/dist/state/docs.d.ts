import { DocumentMap, Navbar, DocumentData, DocumentHeading, NavbarItem } from "../utils/document_interfaces";
export declare type DocState = {
    currentDocument?: DocumentData;
    flatNavbar?: NavbarItem[];
    navbar?: Navbar;
    documents?: DocumentMap;
    setNavBar: (navbar: Navbar) => void;
    setCurrentDocument: (document: DocumentData) => void;
    addDocument: (document: DocumentData) => void;
    addHeadingsToNavbarItem: (slug: string, headings: DocumentHeading[]) => void;
};
export declare const docs: import("zustand/vanilla").StoreApi<DocState>;
