import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@babel/polyfill';
import { Docs } from './components/docs';
import { docStore, docStoreActions } from './store/docStore';
import { docContext, docContextValue } from './doc_context';
import { ComponentList } from './components/component_list';
import { componentListValue } from './components/component_list_value';
import { addDocumentToIndex } from './search/search_index';

export interface DocsOptions {
  rootPath: string;
  remarkPlugins: Function[];
  rehypePlugins: Function[];
  componentList: ComponentList;
  mdxComponents: {
    [key: string]:
      | React.Component<any, any, any>
      | React.FunctionComponent<any>;
  };
  title?: string;
}

async function load(options: DocsOptions) {
  await docStoreActions.loadNavbar(options.rootPath);
  await docStoreActions.loadDocuments(
    options.rootPath,
    docStore.getRawState().navbar
  );
  Object.values(docStore.getRawState().documentMap).forEach(doc => {
    addDocumentToIndex(doc);
  });
  console.log(docStore);
}

export async function docs(
  container: HTMLElement,
  optionsIn: Partial<DocsOptions> = {}
): Promise<void> {
  const options: DocsOptions = {
    rootPath: './',
    remarkPlugins: [],
    rehypePlugins: [],
    title: 'Documentation',
    mdxComponents: {},
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
