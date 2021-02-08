export declare const componentListContext: import("preact").Context<{
    Header: () => import("preact").JSX.Element;
    App: () => import("preact").JSX.Element;
    Logo: () => import("preact").JSX.Element;
    Search: () => import("preact").JSX.Element;
    SearchInput: (props: {
        onChange?: (query: string) => void;
    }) => import("preact").JSX.Element;
    Sidebar: () => import("preact").JSX.Element;
    SidebarLevel: (level: import("./document_interfaces").Navbar) => import("preact").JSX.Element;
    SidebarCategory: (props: {
        key: string;
        label: string;
        childNav: import("./document_interfaces").Navbar;
    }) => import("preact").JSX.Element;
    SidebarItem: (props: {
        item: import("./document_interfaces").NavbarItem;
    }) => import("preact").JSX.Element;
    Main: () => import("preact").JSX.Element;
    SidebarMenu: () => import("preact").JSX.Element;
    DocumentRenderer: typeof import("../components/document_renderer").DocumentRenderer;
}>;
export declare const useComponentList: () => {
    Header: () => import("preact").JSX.Element;
    App: () => import("preact").JSX.Element;
    Logo: () => import("preact").JSX.Element;
    Search: () => import("preact").JSX.Element;
    SearchInput: (props: {
        onChange?: (query: string) => void;
    }) => import("preact").JSX.Element;
    Sidebar: () => import("preact").JSX.Element;
    SidebarLevel: (level: import("./document_interfaces").Navbar) => import("preact").JSX.Element;
    SidebarCategory: (props: {
        key: string;
        label: string;
        childNav: import("./document_interfaces").Navbar;
    }) => import("preact").JSX.Element;
    SidebarItem: (props: {
        item: import("./document_interfaces").NavbarItem;
    }) => import("preact").JSX.Element;
    Main: () => import("preact").JSX.Element;
    SidebarMenu: () => import("preact").JSX.Element;
    DocumentRenderer: typeof import("../components/document_renderer").DocumentRenderer;
};
