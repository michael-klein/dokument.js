import { Navbar, NavbarJSON } from './document_interfaces';
export declare function buildNavbar(navbarJSON: NavbarJSON): Navbar;
export declare function fetchNavbar(rootPath: string, navbarPath: string): Promise<Navbar>;
export declare function slugify(path: string): string;
export declare const fetchDocumentNow: (rootPath: string, path: string) => Promise<void>;
export declare const qeueDocuments: (rootPath: string, navbar: Navbar) => void;
