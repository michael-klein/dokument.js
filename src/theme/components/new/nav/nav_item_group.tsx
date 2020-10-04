import { Menu } from 'antd';
import * as React from 'react';
import { renderNavItem } from './nav_item';
import { renderInitials } from './nav_utils';
import {
  NavbarItem,
  NavbarItemType,
} from '../../../../utils/document_interfaces';

const { SubMenu } = Menu;

export interface NavItemGroupProps extends NavbarItem {
  label: string;
  icon?: JSX.Element;
}
export const renderNavItemGroup = (props: NavItemGroupProps) => {
  const { slug, headings, label, icon } = props;
  return (
    <SubMenu key={slug} icon={icon || renderInitials(label)} title={label}>
      {headings.map(heading =>
        renderNavItem({
          label: heading.text,
          slug: `${slug}/${heading.slug}`,
          type: NavbarItemType.DOCUMENT,
        })
      )}
    </SubMenu>
  );
};
