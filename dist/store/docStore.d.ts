import { Store } from 'pullstate';
import { Navbar, DocumentMap, DocumentData } from '../utils/document_provider';
export interface DocStoreState {
    navbar?: Navbar;
    documentMap: DocumentMap;
    documentsLoaded: boolean;
    currentDocument?: DocumentData;
}
export declare const docStore: Store<DocStoreState>;
export declare const docStoreActions: {
    loadNavbar(path: string): Promise<void>;
    loadDocuments(rootPath: string, navbar: Navbar): Promise<void>;
    getNavbar(): Promise<Navbar>;
};
