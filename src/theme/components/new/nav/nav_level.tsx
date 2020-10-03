import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import * as React from 'react';
import { NavItemProps, renderNavItem } from './nav_item';

const { SubMenu } = Menu;
export interface NavLevelProps {
  type: 'nav-level';
  title: string;
  key: string;
  icon?: JSX.Element;
  items: (NavItemProps | NavLevelProps)[];
}

const renderItem = (item: NavItemProps | NavLevelProps) => {
  if (item.type === 'nav-item') {
    return renderNavItem(item);
  } else {
    return renderNavLevel(item);
  }
};

const Initials = (props:{label:string}) => {
  const initials = props.label.split(' ').map(s => s[0]).join("").toUpperCase();
  return <span role="img">{initials}</span>
}

export const renderNavLevel = (props: NavLevelProps) => {
  const { items, title, icon, key } = props;
  return (
    <SubMenu icon={icon ?? <Icon className="nav-initials" component={() => <Initials label={title}></Initials>} />} key={key} title={title}>
      {items.map(renderItem)}
    </SubMenu>
  );
};
