import create from "zustand/vanilla";
import {
  DocumentMap,
  Navbar,
  DocumentData,
  DocumentHeading,
  NavbarItem,
} from "../utils/document_interfaces";
import produce from "immer";
import { updateIndex } from "../utils/search";

const findNavbarItem = (navbar: Navbar, slug: string) => {
  for (const key of Object.keys(navbar)) {
    const item = navbar[key];
    if (item.slug === slug) {
      return item;
    }
    if (item.children) {
      const child = findNavbarItem(item.children, slug);
      if (child) {
        return child;
      }
    }
  }
  return undefined;
};

const flattenNavbar = (navbar: Navbar): NavbarItem[] => {
  return Object.keys(navbar).flatMap((key) => {
    const item = navbar[key];
    return [
      item,
      ...(item.children ? flattenNavbar(item.children) : []),
    ].filter((i) => i.path);
  });
};
export type DocState = {
  currentDocument?: DocumentData;
  flatNavbar?: NavbarItem[];
  navbar?: Navbar;
  documents?: DocumentMap;
  setNavBar: (navbar: Navbar) => void;
  setCurrentDocument: (document: DocumentData) => void;
  addDocument: (document: DocumentData) => void;
  addHeadingsToNavbarItem: (slug: string, headings: DocumentHeading[]) => void;
};
export const docs = create<DocState>((set) => ({
  setNavBar: (navbar: Navbar) =>
    set(
      produce((state) => {
        state.navbar = navbar;
        state.flatNavbar = flattenNavbar(navbar);
      })
    ),
  setCurrentDocument: (document: DocumentData) =>
    set(
      produce((state) => {
        state.currentDocument = document;
      })
    ),
  addDocument: (document: DocumentData) =>
    set(
      produce((state) => {
        if (!state.documents) {
          state.documents = {};
        }
        state.documents[document.slug] = document;
      })
    ),
  addHeadingsToNavbarItem: (slug: string, headings: DocumentHeading[]) =>
    set(
      produce((state) => {
        const item = findNavbarItem(state.navbar, slug);
        if (item) {
          item.headings = headings;
          state.flatNavbar = flattenNavbar(state.navbar);
        }
      })
    ),
}));
docs.subscribe((data) => {
  updateIndex(data.documents);
});
