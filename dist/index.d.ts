import * as React from 'react';
import '@babel/polyfill';
import { ComponentList } from './components/component_list';
export interface DocsOptions {
    rootPath: string;
    navbarPath: string;
    remarkPlugins: Function[];
    rehypePlugins: Function[];
    componentList: ComponentList;
    mdxComponents: {
        [key: string]: React.Component<any, any, any> | React.FunctionComponent<any>;
    };
    title?: string;
}
export declare const defaultComponentList: ComponentList;
export declare function docs(container: HTMLElement, optionsIn?: Partial<Omit<DocsOptions, 'componentList'> & {
    componentList: Partial<ComponentList>;
}>): Promise<void>;
