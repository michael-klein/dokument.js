import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { HashRouter } from 'react-router-dom';

export function Docs(): JSX.Element {
  const { SideBar, Main } = useDocContext().componentList;
  return (
    <div className="docs">
      <HashRouter>
        <SideBar></SideBar>
        <Main></Main>
      </HashRouter>
    </div>
  );
}
