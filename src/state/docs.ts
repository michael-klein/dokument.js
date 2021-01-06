import create from "zustand/vanilla";
import { createStoreHook } from "./create_store_hook";
import {
  DocumentMap,
  Navbar,
  DocumentData,
  DocumentHeading,
  NavbarItem
} from "../utils/document_interfaces";

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

export type DocState = {
  navbar?: Navbar;
  documents?: DocumentMap;
  setNavBar: (navbar: Navbar) => void;
  addDocument: (document: DocumentData) => void;
  addHeadingsToNavbarItem: (slug: string, headings: DocumentHeading[]) => void;
};
export const docs = create<DocState>(set => ({
  setNavBar: (navbar: Navbar) =>
    set(state => {
      state.navbar = navbar;
      return state;
    }),
  addDocument: (document: DocumentData) =>
    set(state => {
      if (!state.documents) {
        state.documents = {};
      }
      state.documents[document.slug] = document;
      return state;
    }),
  addHeadingsToNavbarItem: (slug: string, headings: DocumentHeading[]) =>
    set(state => {
      const item = findNavbarItem(slug, state.navbar);
      if (item) {
        item.headings = headings;
      }
      return state;
    })
}));

export const useDocs = createStoreHook(docs);
