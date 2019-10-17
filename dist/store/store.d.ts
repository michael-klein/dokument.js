import { Store } from 'pullstate';
import { Navbar, DocumentMap } from 'document_handling/document_provider';
export interface DocStoreState {
    navbar?: Navbar;
    documentMap: DocumentMap;
}
export declare class DocStore extends Store<DocStoreState> {
    loadNavbar(path: string): Promise<void>;
    loadDocuments(rootPath: string, navbar: Navbar): Promise<void>;
}
export declare const docStore: DocStore;
