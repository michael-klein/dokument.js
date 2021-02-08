import { DocumentMap, Navbar, DocumentData, DocumentHeading } from "../utils/document_interfaces";
export declare type DocState = {
    navbar?: Navbar;
    documents?: DocumentMap;
    setNavBar: (navbar: Navbar) => void;
    addDocument: (document: DocumentData) => void;
    addHeadingsToNavbarItem: (slug: string, headings: DocumentHeading[]) => void;
};
export declare const docs: import("zustand/vanilla").StoreApi<DocState>;
