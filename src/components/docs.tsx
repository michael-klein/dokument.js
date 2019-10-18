import * as React from 'react';
import { useDocContext } from '../hooks/use_doc_context';
import { HashRouter } from 'react-router-dom';
import { useDocStore } from '../store/hooks/use_doc_store';

export function Docs(): JSX.Element {
  const { SideBar, Main, Loading } = useDocContext().componentList;
  const documentsLoaded = useDocStore(state => state.documentsLoaded);
  return (
    <div className="docs">
      {documentsLoaded ? (
        <HashRouter>
          <SideBar></SideBar>
          <Main></Main>
        </HashRouter>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}
