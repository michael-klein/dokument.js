import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';

export function SideBar(): JSX.Element {
  const { componentList } = useDocContext();
  const { Nav, Recent } = componentList;
  return (
    <aside className="sidebar">
      <React.Suspense fallback="">
        <Nav></Nav>
      </React.Suspense>
      <React.Suspense fallback="">
        <Recent></Recent>
      </React.Suspense>
    </aside>
  );
}
