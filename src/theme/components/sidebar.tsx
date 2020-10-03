import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { Layout } from 'antd';
const { Sider } = Layout;

export function SideBar(): JSX.Element {
  const { componentList } = useDocContext();
  const { Nav } = componentList;
  return (
    <React.Suspense fallback="">
      <Sider>
        <Nav></Nav>
      </Sider>
    </React.Suspense>
  );
}
