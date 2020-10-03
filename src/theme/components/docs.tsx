import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { HashRouter } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content } = Layout;

export function Docs(): JSX.Element {
  const { SideBar } = useDocContext().componentList;
  return (
    <>
      <HashRouter>
        <Layout style={{ height: '100vh' }}>
          <Header>Header</Header>
          <Layout style={{ height: 'calc(100vh - 64px)' }}>
            <SideBar></SideBar>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </HashRouter>
    </>
  );
}
