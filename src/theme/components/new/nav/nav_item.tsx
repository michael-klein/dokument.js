import { Menu } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavItemProps {
  type: 'nav-item';
  label: string;
  url: string;
  icon?: JSX.Element;
  key: string;
}
export const renderNavItem = (props: NavItemProps) => {
  const { label, url, icon, key } = props;
  console.log('item');
  return (
    <Menu.Item icon={icon} key={key}>
      <Link to={url}>{label}</Link>
    </Menu.Item>
  );
};
