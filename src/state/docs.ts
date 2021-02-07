import create from "zustand/vanilla";
import { createStoreHook } from "./create_store_hook";
import {
  DocumentMap,
  Navbar,
  DocumentData,
  DocumentHeading,
  NavbarItem
} from "../utils/document_interfaces";
import produce from "immer";
import { useEffect, useRef, useState } from "preact/hooks";

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
    set(
      produce(state => {
        state.navbar = navbar;
        return state;
      })
    ),
  addDocument: (document: DocumentData) =>
    set(
      produce(state => {
        if (!state.documents) {
          state.documents = {};
        }
        state.documents[document.slug] = document;
        return state;
      })
    ),
  addHeadingsToNavbarItem: (slug: string, headings: DocumentHeading[]) =>
    set(
      produce(state => {
        const item = findNavbarItem(slug, state.navbar);
        if (item) {
          item.headings = headings;
        }
        return state;
      })
    )
}));

export const useDocs = createStoreHook(docs);

export const useDocuments = () => useDocs(state => state.documents);

export const useDocument = (slug: string, fallBackToFirst: boolean = false) =>
  useDocs(
    state =>
      state.documents[slug] ??
      (fallBackToFirst && state.documents[Object.keys(state.documents)[0]])
  );

export const useNavbar = () => useDocs(state => state.navbar);

export interface FlatNavbarItem {
  slug: string;
  path: string;
}
const flattenNavbar = (navbar: Navbar): FlatNavbarItem[] => {
  return Object.keys(navbar).flatMap(key => {
    const item = navbar[key];
    return [
      {
        slug: item.slug,
        path: item.path
      },
      ...(item.children ? flattenNavbar(item.children) : [])
    ].filter(i => i.path);
  });
};
export const useFlatNavbar = () => {
  const navbar = useNavbar();
  const [flatNavbar, setFlatNavbar] = useState(() => flattenNavbar(navbar));
  const initRef = useRef(false);
  useEffect(() => {
    if (initRef.current) {
      setFlatNavbar(() => flattenNavbar(navbar));
    }
    initRef.current = true;
  }, [navbar]);

  return flatNavbar;
};
