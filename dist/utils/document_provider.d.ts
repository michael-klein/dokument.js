import { Navbar, NavbarJSON } from "./document_interfaces";
import { FlatNavbarItem } from "../state/hooks/use_flat_navbar";
export declare function buildNavbar(navbarJSON: NavbarJSON): Navbar;
export declare function fetchNavbar(rootPath: string, navbarPath: string): Promise<Navbar>;
export declare function slugify(path: string): string;
export declare const fetchDocumentNowBySlug: (rootPath: string, flatNavbar: FlatNavbarItem[], slug: string) => Promise<void>;
export declare const fetchDocumentNow: (rootPath: string, path: string) => Promise<void>;
export declare const queueDocuments: (rootPath: string, navbar: Navbar) => void;