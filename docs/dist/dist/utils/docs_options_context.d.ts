import { HtmdxOptions } from "htmdx";
import { ComponentList } from "../components/component_list";
export interface DocsOptions {
    rootPath: string;
    navbarPath: string;
    htmdxOptions: HtmdxOptions;
    title?: string;
    scrollContainerSelector?: string;
    container?: HTMLElement;
    componentListModifier?: {
        [key in keyof ComponentList]?: (OriginalComponent: ComponentList[key]) => ComponentList[key];
    };
}
export declare const docsOptionsContext: import("preact").Context<DocsOptions>;
export declare const useDocsOptions: () => DocsOptions;
