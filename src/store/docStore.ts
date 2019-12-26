import {
  Navbar,
  fetchNavbar,
  DocumentMap,
  fetchDocuments,
  DocumentData,
} from '../utils/document_provider';

import { createStore, Store } from 'forimmer';

export const dokumentStore: Store<DocStoreState> = createStore<DocStoreState>(
  {}
);

export const loadNavBar = dokumentStore.createStoreAction(
  async (path: string) => {
    const navbar = await fetchNavbar(path);
    return draft => {
      draft.navbar = navbar;
    };
  }
);

export const setCurrentDocument = dokumentStore.createStoreAction(
  async (currentDocument: DocumentData) => {
    return draft => {
      draft.currentDocument = currentDocument;
    };
  }
);

export const loadDocuments = dokumentStore.createStoreAction(
  async ({ rootPath, navbar }: { rootPath: string; navbar: Navbar }) => {
    const documentMap = await fetchDocuments(rootPath, navbar);
    return draft => {
      draft.documentMap = documentMap;
    };
  }
);

export interface DocStoreState {
  navbar?: Navbar;
  documentMap?: DocumentMap;
  currentDocument?: DocumentData;
}
