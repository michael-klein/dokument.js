import * as React from 'react';
import { DocStoreState } from './store/docStore';
import { Store } from 'pullstate';
import { ComponentList } from './theme/components/component_list';
import { DocSearchResult } from './search/search_index';
export interface DocContextValue {
    docStore: Store<DocStoreState>;
    remarkPlugins: Function[];
    rehypePlugins: Function[];
    rootPath: string;
    componentList: ComponentList;
    title: string;
    search: (query: string) => DocSearchResult[];
    mdxComponents: {
        [key: string]: React.Component<any, any, any> | React.FunctionComponent<any>;
    };
}
export declare const docContextValue: DocContextValue;
export declare const docContext: React.Context<DocContextValue>;
