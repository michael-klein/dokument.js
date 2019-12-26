import * as React from 'react';
import { docStore, DocStoreState } from './store/docStore';
import { Store } from 'pullstate';
import { ComponentList } from './theme/components/component_list';
import { search, DocSearchResult } from './search/search_index';
import { HtmdxOptions } from 'htmdx';

export interface DocContextValue {
  docStore: Store<DocStoreState>;
  rootPath: string;
  componentList: ComponentList;
  title: string;
  search: (query: string) => DocSearchResult[];
  htmdxOptions: HtmdxOptions;
}
export const docContextValue: DocContextValue = {
  docStore,
  rootPath: './',
  componentList: undefined,
  search: search,
  title: '',
  htmdxOptions: {},
};

export const docContext = React.createContext(docContextValue);
