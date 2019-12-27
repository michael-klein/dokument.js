import { createStore, Store } from 'forimmer';
import {
  Navbar,
  DocumentData,
  DocumentMap,
} from '../utils/document_interfaces';

export const dokumentStore: Store<DocStoreState> = createStore<DocStoreState>({
  documentMap: {},
  allDocumentsLoaded: false,
});

export const setNavBar = dokumentStore.createStoreAction(
  async (navbar: Navbar) => {
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

export const addDocument = dokumentStore.createStoreAction(
  async (document: DocumentData) => {
    return draft => {
      draft.documentMap[document.slug] = document;
    };
  }
);

export const setDocumentsLoaded = dokumentStore.createStoreAction(async () => {
  return draft => {
    draft.allDocumentsLoaded = true;
  };
});

export interface DocStoreState {
  navbar?: Navbar;
  documentMap?: DocumentMap;
  currentDocument?: DocumentData;
  allDocumentsLoaded?: boolean;
}
