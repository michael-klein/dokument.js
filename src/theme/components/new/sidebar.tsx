import { Layout } from 'antd';
import * as React from 'react';
import { Logo } from './logo';
import { Nav, NavProps } from './nav/nav';

const { Sider } = Layout;

const navProps: NavProps = {
  items: [
    {
      type: 'nav-level',
      key: 'sub1',
      title: 'level 1',
      items: [
        { type: 'nav-item', key: 'item1', label: 'item1', url: '' },
        {
          type: 'nav-level',
          key: 'sub1-1',
          title: 'level 1',
          items: [
            { type: 'nav-item', key: 'item1-1', label: 'item1', url: '' },
          ],
        },
      ],
    },
    {
      type: 'nav-level',
      key: 'sub2',
      title: 'level 1',
      items: [{ type: 'nav-item', key: 'item2', label: 'item1', url: '' }],
    },
    {
      type: 'nav-level',
      key: 'sub3',
      title: 'level 1',
      items: [{ type: 'nav-item', key: 'item3', label: 'item1', url: '' }],
    },
    {
      type: 'nav-level',
      key: 'sub4',
      title: 'level 1',
      items: [{ type: 'nav-item', key: 'item4', label: 'item1', url: '' }],
    },
    {
      type: 'nav-level',
      key: 'sub5',
      title: 'level 1',
      items: [{ type: 'nav-item', key: 'item5', label: 'item1', url: '' }],
    },
  ],
};

export const SideBar = (props: {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}) => {
  const { collapsed, onCollapse } = props;
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
      <Nav {...navProps}></Nav>
    </Sider>
  );
};
