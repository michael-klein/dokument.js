import '@babel/polyfill';
import { ComponentList } from './theme/components/component_list';
import { HtmdxOptions } from 'htmdx';
export interface DocsOptions {
    rootPath: string;
    navbarPath: string;
    componentList: ComponentList;
    htmdxOptions: HtmdxOptions;
    title?: string;
    scrollContainerSelector?: string;
}
export declare const defaultComponentList: ComponentList;
export declare function dokument(container: HTMLElement, optionsIn?: Partial<Omit<DocsOptions, 'componentList'> & {
    componentList: Partial<ComponentList>;
}>): Promise<void>;
