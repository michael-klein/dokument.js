export declare type SidebarCollapsedState = {
    isCollapsed?: {
        [key: string]: boolean;
    };
    setCollapsed(path: string, producer: (current: boolean) => boolean): void;
};
export declare const sidebarCollapsedState: import("zustand/vanilla").StoreApi<SidebarCollapsedState>;
