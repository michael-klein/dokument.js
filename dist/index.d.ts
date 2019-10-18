import '@babel/polyfill';
import { ComponentList } from './components/component_list';
export interface DocsOptions {
    rootPath: string;
    remarkPlugins: Function[];
    rehypePlugins: Function[];
    componentList: ComponentList;
    title?: string;
}
export declare function docs(container: HTMLElement, optionsIn?: Partial<DocsOptions>): Promise<void>;
