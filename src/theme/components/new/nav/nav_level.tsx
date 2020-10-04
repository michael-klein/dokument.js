import { Menu } from 'antd';
import * as React from 'react';
import { renderNavItem } from './nav_item';
import { renderNavItemGroup } from './nav_item_group';
import { renderInitials } from './nav_utils';
import {
  NavbarItem,
  NavbarItemType,
} from '../../../../utils/document_interfaces';

const { SubMenu } = Menu;
export interface NavLevelProps extends NavbarItem {
  label: string;
  icon?: JSX.Element;
}

export const renderItem = (label: string, item: NavbarItem) => {
  if (item.type === NavbarItemType.DOCUMENT) {
    if (item.headings) {
      return renderNavItemGroup({ ...item, label });
    } else {
      return renderNavItem({ ...item, label });
    }
  } else {
    return renderNavLevel({ ...item, label });
  }
};

export const renderNavLevel = (props: NavLevelProps) => {
  const { children, label, icon, slug } = props;
  return (
    <SubMenu key={slug} icon={icon || renderInitials(label)} title={label}>
      {Object.keys(children).map(label => {
        return renderItem(label, children[label]);
      })}
    </SubMenu>
  );
};
