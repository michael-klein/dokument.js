import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@babel/polyfill';
import { Docs } from './theme/components/docs';
import { docStore, docStoreActions } from './store/docStore';
import { docContext, docContextValue } from './doc_context';
import { addDocumentToIndex } from './search/search_index';
import { join } from './utils/file_utils';
import { ComponentList } from './theme/components/component_list';
import { componentListValue } from './theme/components/component_list_value';
import { HtmdxOptions } from 'htmdx';

export interface DocsOptions {
  rootPath: string;
  navbarPath: string;
  componentList: ComponentList;
  htmdxOptions: HtmdxOptions;
  title?: string;
}

async function load(options: DocsOptions) {
  await docStoreActions.loadNavbar(join(options.rootPath, options.navbarPath));
  await docStoreActions.loadDocuments(
    options.rootPath,
    docStore.getRawState().navbar
  );
  Object.values(docStore.getRawState().documentMap).forEach(doc => {
    addDocumentToIndex(doc);
  });
}

export const defaultComponentList: ComponentList = { ...componentListValue };

export async function dokument(
  container: HTMLElement,
  optionsIn: Partial<
    Omit<DocsOptions, 'componentList'> & {
      componentList: Partial<ComponentList>;
    }
  > = {}
): Promise<void> {
  const options: DocsOptions = {
    rootPath: './',
    title: 'Documentation',
    htmdxOptions: { ...optionsIn.htmdxOptions },
    navbarPath: '',
    ...optionsIn,
    componentList: {
      ...componentListValue,
      ...(optionsIn.componentList || {}),
    },
  };
  document.title = options.title;
  load(options);
  const Provider = docContext.Provider;
  ReactDOM.render(
    <Provider value={{ ...docContextValue, ...options }}>
      <Docs></Docs>
    </Provider>,
    container
  );
}
