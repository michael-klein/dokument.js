import { Menu } from 'antd';
import * as React from 'react';
import {
  Navbar,
  NavbarItem,
  NavbarItemType,
} from '../../../../utils/document_interfaces';
import { renderItem } from './nav_level';

export interface NavProps {
  items: Navbar;
}

const getFirstDocumentItem = (items: Navbar): NavbarItem => {
  return Object.keys(items)
    .map(key => items[key])
    .find(item => {
      if (item.type === NavbarItemType.DOCUMENT) {
        return item;
      } else {
        return getFirstDocumentItem(item.children);
      }
    });
};

export const Nav = (props: NavProps) => {
  const { items } = props;
  return (
    <Menu
      theme="light"
      defaultOpenKeys={Object.keys(items).map(key => items[key].slug)}
      defaultSelectedKeys={[getFirstDocumentItem(items).slug]}
      multiple={false}
      mode="inline"
    >
      {Object.keys(items).map(label =>
        renderItem(label, {
          ...items[label],
        })
      )}
    </Menu>
  );
};
