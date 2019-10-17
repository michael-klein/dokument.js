import * as React from 'react';
import { useDocContext } from '../hooks/use_doc_context';

export function SideBar(): JSX.Element {
  const { Nav, Search } = useDocContext().componentList;
  return (
    <aside className="sidebar">
      <h1>Dokument.js</h1>
      <Search></Search>
      <Nav></Nav>
    </aside>
  );
}
