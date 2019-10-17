import { Store } from 'pullstate';
import {
  Navbar,
  fetchNavbar,
  DocumentMap,
  fetchDocuments,
  DocumentData,
} from '../document_handling/document_provider';

export interface DocStoreState {
  navbar?: Navbar;
  documentMap: DocumentMap;
  documentsLoaded: boolean;
}

export const docStore = new Store<DocStoreState>({
  documentMap: {},
  documentsLoaded: false,
});

export const docStoreActions = {
  async loadNavbar(path: string) {
    const navbar = await fetchNavbar(path);
    docStore.update(state => {
      state.navbar = navbar;
    });
  },

  async loadDocuments(rootPath: string, navbar: Navbar) {
    const documentMap = await fetchDocuments(rootPath, navbar);
    docStore.update(state => {
      state.documentMap = { ...state.documentMap, ...documentMap };
      state.documentsLoaded = true;
    });
  },

  async getSaveDocumentByNavId(slug?: string): Promise<DocumentData> {
    let document: DocumentData = docStore.getRawState().documentMap[slug];
    if (!document) {
      document = await new Promise(resolve => {
        let unsubscribe = docStore.subscribe(
          state => state.documentMap,
          documentMap => {
            if (!slug) {
              slug = Object.keys(documentMap)[0];
            }
            if (documentMap[slug]) {
              resolve(documentMap[slug]);
              unsubscribe();
            }
          }
        );
      });
    }
    return document;
  },

  async getNavbar(): Promise<Navbar> {
    let navbar: Navbar = docStore.getRawState().navbar;
    if (!navbar) {
      navbar = await new Promise(resolve => {
        let unsubscribe = docStore.subscribe(
          state => state.navbar,
          navbar => {
            if (navbar) {
              resolve(navbar);
              unsubscribe();
            }
          }
        );
      });
    }
    return navbar;
  },
};
