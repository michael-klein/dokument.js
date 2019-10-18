import * as React from 'react';
import { useDocContext } from '../hooks/use_doc_context';

export function SideBar(): JSX.Element {
  const { componentList, title } = useDocContext();
  const { Nav, Search } = componentList;
  return (
    <aside className="sidebar">
      <h1>{title}</h1>
      <Search></Search>
      <Nav></Nav>
    </aside>
  );
}
