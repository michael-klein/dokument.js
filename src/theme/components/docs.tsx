import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { HashRouter } from 'react-router-dom';

export function Docs(): JSX.Element {
  const { SideBar, Main, Header } = useDocContext().componentList;
  return (
    <>
      <HashRouter>
        <Header></Header>
        <div className="main-wrapper">
          <SideBar></SideBar>
          <Main></Main>
        </div>
      </HashRouter>
    </>
  );
}
