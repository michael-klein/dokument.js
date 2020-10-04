import { Menu } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem } from '../../../../utils/document_interfaces';

export interface NavItemProps extends NavbarItem {
  icon?: JSX.Element;
  label: string;
}
export const renderNavItem = (props: NavItemProps) => {
  const { icon, slug, path, label } = props;
  return (
    <Menu.Item icon={icon} key={slug}>
      <Link to={path}>{label}</Link>
    </Menu.Item>
  );
};
