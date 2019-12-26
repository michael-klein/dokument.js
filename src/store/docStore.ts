import { Store } from 'pullstate';
import {
  Navbar,
  fetchNavbar,
  DocumentMap,
  fetchDocuments,
  DocumentData,
} from '../utils/document_provider';

export interface DocStoreState {
  navbar?: Navbar;
  documentMap: DocumentMap;
  documentsLoaded: boolean;
  currentDocument?: DocumentData;
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
