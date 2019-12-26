import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';

export function SideBar(): JSX.Element {
  const { componentList, title } = useDocContext();
  const { Nav, Search, Branding, Recent } = componentList;
  return (
    <aside className="sidebar">
      <Branding>{title}</Branding>
      <Search></Search>
      <React.Suspense fallback="">
        <Nav></Nav>
      </React.Suspense>
      <React.Suspense fallback="">
        <Recent></Recent>
      </React.Suspense>
    </aside>
  );
}
