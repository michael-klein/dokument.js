import * as React from 'react';
import { Navbar } from '../document_handling/document_provider';
export declare function NavItem(props: {
    path: string;
    slug?: string;
    children: React.ReactNode;
}): JSX.Element;
export declare function NavLevel(props: {
    navbar: Navbar;
}): JSX.Element;
export declare function Nav(): JSX.Element;
