import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@babel/polyfill';
import { Docs } from './theme/components/docs';
import { setNavBar, setDocumentsLoaded } from './store/docStore';
import { docContext, docContextValue } from './doc_context';
import { join } from './utils/file_utils';
import { ComponentList } from './theme/components/component_list';
import { componentListValue } from './theme/components/component_list_value';
import { HtmdxOptions } from 'htmdx';
import { fetchDocuments, fetchNavbar } from './utils/document_provider';

export interface DocsOptions {
  rootPath: string;
  navbarPath: string;
  componentList: ComponentList;
  htmdxOptions: HtmdxOptions;
  title?: string;
}

async function load(options: DocsOptions) {
  const navbar = await fetchNavbar(join(options.rootPath, options.navbarPath));
  await setNavBar(navbar);
  await fetchDocuments(options.rootPath, navbar);
  setDocumentsLoaded();
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
