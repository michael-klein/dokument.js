import { Navbar, DocumentMap, DocumentData } from '../utils/document_provider';
import { Store } from 'forimmer';
export declare const dokumentStore: Store<DocStoreState>;
export declare const loadNavBar: (path: string) => Promise<(draft: {
    navbar?: {
        [x: string]: {
            type: import("../utils/document_provider").NavbarItemType;
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
}) => void>;
export declare const setCurrentDocument: (currentDocument: DocumentData) => Promise<(draft: {
    navbar?: {
        [x: string]: {
            type: import("../utils/document_provider").NavbarItemType;
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
}) => void>;
export declare const loadDocuments: ({ rootPath, navbar }: {
    rootPath: string;
    navbar: Navbar;
}) => Promise<(draft: {
    navbar?: {
        [x: string]: {
            type: import("../utils/document_provider").NavbarItemType;
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
}) => void>;
export interface DocStoreState {
    navbar?: Navbar;
    documentMap?: DocumentMap;
    currentDocument?: DocumentData;
}
