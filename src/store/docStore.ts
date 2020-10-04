import { createStore, Store } from 'forimmer';
import {
  Navbar,
  DocumentData,
  DocumentMap,
} from '../utils/document_interfaces';

export const dokumentStore: Store<DocStoreState> = createStore<DocStoreState>({
  documentMap: {},
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

export interface DocStoreState {
  navbar?: Navbar;
  documentMap?: DocumentMap;
  currentDocument?: DocumentData;
}
