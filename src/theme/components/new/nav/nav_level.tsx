import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import * as React from 'react';
import { renderNavItem } from './nav_item';
import {  NavbarItem, NavbarItemType } from '../../../../utils/document_interfaces';

const { SubMenu } = Menu;
export interface NavLevelProps extends NavbarItem {
  label: string;
  icon?: JSX.Element;
}

export const renderItem = (label:string, item: NavbarItem) => {
  if (item.type === NavbarItemType.DOCUMENT) {
    return renderNavItem({...item, label});
  } else {
    return renderNavLevel({...item, label});
  }
};

const Initials = (props:{label:string}) => {
  const initials = props.label.split(' ').map(s => s[0]).join("").toUpperCase();
  return <span role="img">{initials}</span>
}

export const renderNavLevel = (props: NavLevelProps) => {
  const { children, label, icon, slug } = props;
  return (
    <SubMenu key={slug} icon={icon ?? <Icon className="nav-initials" component={() => <Initials label={label}></Initials>} />}  title={label}>
      {Object.keys(children).map(label => {
        return renderItem( label,children[label])
      })}
    </SubMenu>
  );
};
