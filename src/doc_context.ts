import * as React from 'react';
import { docStore, DocStoreState } from './store/docStore';
import { Store } from 'pullstate';
import { ComponentList } from './components/component_list';
import { search, DocSearchResult } from './search/search_index';

export interface DocContextValue {
  docStore: Store<DocStoreState>;
  remarkPlugins: Function[];
  rehypePlugins: Function[];
  rootPath: string;
  componentList: ComponentList;
  title: string;
  search: (query: string) => DocSearchResult[];
}
export const docContextValue: DocContextValue = {
  docStore,
  remarkPlugins: [],
  rehypePlugins: [],
  rootPath: './',
  componentList: undefined,
  search: search,
  title: '',
};

export const docContext = React.createContext(docContextValue);
