import { Store } from 'forimmer';
import { Navbar, DocumentData, DocumentMap } from '../utils/document_interfaces';
export declare const dokumentStore: Store<DocStoreState>;
export declare const setNavBar: (navbar: Navbar) => Promise<(draft: {
    navbar?: {
        [x: string]: {
            type: import("../utils/document_interfaces").NavbarItemType;
            path?: string;
            slug?: string;
            children?: any;
        };
    };
    documentMap?: {
        [x: string]: {
            title: string;
            path: string;
            slug: string;
            content: string;
            headings: {
                size: number;
                text: string;
                raw: string;
                slug: string;
            }[];
            lastModified: number;
        };
    };
    currentDocument?: {
        title: string;
        path: string;
        slug: string;
        content: string;
        headings: {
            size: number;
            text: string;
            raw: string;
            slug: string;
        }[];
        lastModified: number;
    };
    allDocumentsLoaded?: boolean;
}) => void>;
export declare const setCurrentDocument: (currentDocument: DocumentData) => Promise<(draft: {
    navbar?: {
        [x: string]: {
            type: import("../utils/document_interfaces").NavbarItemType;
            path?: string;
            slug?: string;
            children?: any;
        };
    };
    documentMap?: {
        [x: string]: {
            title: string;
            path: string;
            slug: string;
            content: string;
            headings: {
                size: number;
                text: string;
                raw: string;
                slug: string;
            }[];
            lastModified: number;
        };
    };
    currentDocument?: {
        title: string;
        path: string;
        slug: string;
        content: string;
        headings: {
            size: number;
            text: string;
            raw: string;
            slug: string;
        }[];
        lastModified: number;
    };
    allDocumentsLoaded?: boolean;
}) => void>;
export declare const addDocument: (document: DocumentData) => Promise<(draft: {
    navbar?: {
        [x: string]: {
            type: import("../utils/document_interfaces").NavbarItemType;
            path?: string;
            slug?: string;
            children?: any;
        };
    };
    documentMap?: {
        [x: string]: {
            title: string;
            path: string;
            slug: string;
            content: string;
            headings: {
                size: number;
                text: string;
                raw: string;
                slug: string;
            }[];
            lastModified: number;
        };
    };
    currentDocument?: {
        title: string;
        path: string;
        slug: string;
        content: string;
        headings: {
            size: number;
            text: string;
            raw: string;
            slug: string;
        }[];
        lastModified: number;
    };
    allDocumentsLoaded?: boolean;
}) => void>;
export declare const setDocumentsLoaded: () => Promise<(draft: {
    navbar?: {
        [x: string]: {
            type: import("../utils/document_interfaces").NavbarItemType;
            path?: string;
            slug?: string;
            children?: any;
        };
    };
    documentMap?: {
        [x: string]: {
            title: string;
            path: string;
            slug: string;
            content: string;
            headings: {
                size: number;
                text: string;
                raw: string;
                slug: string;
            }[];
            lastModified: number;
        };
    };
    currentDocument?: {
        title: string;
        path: string;
        slug: string;
        content: string;
        headings: {
            size: number;
            text: string;
            raw: string;
            slug: string;
        }[];
        lastModified: number;
    };
    allDocumentsLoaded?: boolean;
}) => void>;
export interface DocStoreState {
    navbar?: Navbar;
    documentMap?: DocumentMap;
    currentDocument?: DocumentData;
    allDocumentsLoaded?: boolean;
}
