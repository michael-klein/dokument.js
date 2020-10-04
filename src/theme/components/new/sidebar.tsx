import { Layout } from 'antd';
import { useStoreState } from 'forimmer';
import { useDocContext } from '../../../hooks/use_doc_context';
import * as React from 'react';
import { Logo } from './logo';
import { Nav } from './nav/nav';

const { Sider } = Layout;

export const SideBar = (props: {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}) => {
  const { collapsed, onCollapse } = props;

  const { dokumentStore } = useDocContext();
  const [navbar] = useStoreState(dokumentStore, state => [state.navbar]);

  return (
    <Sider
      collapsible
      theme="light"
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Logo collapsed={collapsed}></Logo>
      <Nav items={navbar}></Nav>
    </Sider>
  );
};
