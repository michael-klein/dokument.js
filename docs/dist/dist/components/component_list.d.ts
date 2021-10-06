import { DocumentRenderer } from "./document_renderer";
export declare const componentList: {
    Header: () => import("preact").JSX.Element;
    App: () => import("preact").JSX.Element;
    Logo: () => import("preact").JSX.Element;
    Search: () => import("preact").JSX.Element;
    SearchInput: (props: {
        onChange?: (query: string) => void;
    }) => import("preact").JSX.Element;
    Sidebar: () => import("preact").JSX.Element;
    SidebarLevel: (level: import("../utils/document_interfaces").Navbar) => import("preact").JSX.Element;
    SidebarCategory: (props: {
        key: string;
        label: string;
        childNav: import("../utils/document_interfaces").Navbar;
    }) => import("preact").JSX.Element;
    SidebarItem: (props: {
        item: import("../utils/document_interfaces").NavbarItem;
    }) => import("preact").JSX.Element;
    Main: () => import("preact").JSX.Element;
    SidebarMenu: () => import("preact").JSX.Element;
    DocumentRenderer: typeof DocumentRenderer;
    BreadCrumbs: () => import("preact").JSX.Element;
};
export declare type ComponentList = typeof componentList;
