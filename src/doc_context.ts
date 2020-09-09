import * as React from 'react';
import { dokumentStore, DocStoreState } from './store/docStore';
import { ComponentList } from './theme/components/component_list';
import { search, DocSearchResult } from './search/search_index';
import { HtmdxOptions } from 'htmdx';
import { Store } from 'forimmer';

export interface DocContextValue {
  dokumentStore: Store<DocStoreState>;
  rootPath: string;
  componentList: ComponentList;
  title: string;
  search: (query: string) => DocSearchResult[];
  htmdxOptions: HtmdxOptions;
  scrollContainerSelector: string;
}
export const docContextValue: DocContextValue = {
  dokumentStore,
  rootPath: './',
  componentList: undefined,
  search: search,
  title: '',
  htmdxOptions: {},
  scrollContainerSelector: 'main',
};

export const docContext = React.createContext(docContextValue);
