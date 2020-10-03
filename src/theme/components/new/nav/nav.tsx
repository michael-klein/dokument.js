import { Menu } from 'antd';
import * as React from 'react';
import { renderNavLevel, NavLevelProps } from './nav_level';

export interface NavProps {
  items: NavLevelProps[];
}

export const Nav = (props: NavProps) => {
  const { items } = props;
  return (
    <Menu
      theme="light"
      defaultOpenKeys={items.map(item => item.key)}
      defaultSelectedKeys={[items[0].items[0].key]}
      multiple={false}
      mode="inline"
    >
      {items.map(item => renderNavLevel(item))}
    </Menu>
  );
};
