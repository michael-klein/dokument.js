import * as React from 'react';
import { useDocContext } from '../hooks/use_doc_context';

export function SideBar(): JSX.Element {
  const { componentList, title } = useDocContext();
  const { Nav, Search, Branding } = componentList;
  return (
    <aside className="sidebar">
      <Branding>{title}</Branding>
      <Search></Search>
      <Nav></Nav>
    </aside>
  );
}
