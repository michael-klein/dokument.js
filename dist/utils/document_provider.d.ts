import { DocumentHeading, Navbar, NavbarJSON } from './document_interfaces';
export declare function findHeadings(document: string): DocumentHeading[];
export declare function buildNavbar(navbarJSON: NavbarJSON): Navbar;
export declare function fetchNavbar(path: string): Promise<Navbar>;
export declare function slugify(path: string): string;
export declare function fetchDocuments(rootPath: string, navbar: Navbar): Promise<void>;
