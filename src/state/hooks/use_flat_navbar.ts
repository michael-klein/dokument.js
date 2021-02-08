import { Navbar } from "../../utils/document_interfaces";
import { useEffect, useRef, useState } from "preact/hooks";
import { useNavbar } from "./use_navbar";

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
