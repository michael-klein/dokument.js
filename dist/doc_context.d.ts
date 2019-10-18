import * as React from 'react';
import { DocStoreState } from './store/docStore';
import { Store } from 'pullstate';
import { ComponentList } from './components/component_list';
import { DocSearchResult } from './search/search_index';
export interface DocContextValue {
    docStore: Store<DocStoreState>;
    remarkPlugins: Function[];
    rehypePlugins: Function[];
    rootPath: string;
    componentList: ComponentList;
    title: string;
    search: (query: string) => DocSearchResult[];
}
export declare const docContextValue: DocContextValue;
export declare const docContext: React.Context<DocContextValue>;
