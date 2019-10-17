import { Store } from 'pullstate';
import { Navbar, DocumentMap, DocumentData } from '../document_handling/document_provider';
export interface DocStoreState {
    navbar?: Navbar;
    documentMap: DocumentMap;
    documentsLoaded: boolean;
}
export declare const docStore: Store<DocStoreState>;
export declare const docStoreActions: {
    loadNavbar(path: string): Promise<void>;
    loadDocuments(rootPath: string, navbar: Navbar): Promise<void>;
    getSaveDocumentByNavId(slug?: string): Promise<DocumentData>;
    getNavbar(): Promise<Navbar>;
};
