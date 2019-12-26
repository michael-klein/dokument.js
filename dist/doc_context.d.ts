import * as React from 'react';
import { DocStoreState } from './store/docStore';
import { Store } from 'pullstate';
import { ComponentList } from './theme/components/component_list';
import { DocSearchResult } from './search/search_index';
import { HtmdxOptions } from 'htmdx';
export interface DocContextValue {
    docStore: Store<DocStoreState>;
    rootPath: string;
    componentList: ComponentList;
    title: string;
    search: (query: string) => DocSearchResult[];
    htmdxOptions: HtmdxOptions;
}
export declare const docContextValue: DocContextValue;
export declare const docContext: React.Context<DocContextValue>;
