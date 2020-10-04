import { createStore, Store } from 'forimmer';
import {
  Navbar,
  DocumentData,
  DocumentMap,
  DocumentHeading,
  NavbarItem,
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

const findNavbarItem = (slug: string, navbar: Navbar): NavbarItem => {
  return Object.keys(navbar)
    .map(key => navbar[key])
    .find(item => {
      if (item.slug === slug) {
        return item;
      } else {
        return findNavbarItem(slug, item.children);
      }
    });
};
export const addHeadingsToNavbarItem = dokumentStore.createStoreAction(
  async ({ slug, headings }: { slug: string; headings: DocumentHeading[] }) => {
    return draft => {
      const item = findNavbarItem(slug, draft.navbar);
      if (item) {
        item.headings = headings;
      }
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
