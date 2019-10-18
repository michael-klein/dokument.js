import * as React from 'react';
import { Navbar, NavbarItemType } from '../utils/document_provider';
import { useDocContext } from '../hooks/use_doc_context';

export interface NavLevelProps {
  navbar: Navbar;
}
export function NavLevel(props: NavLevelProps): JSX.Element {
  const { navbar } = props;
  const { NavItem, NavLevel } = useDocContext().componentList;
  return (
    <ul className="nav">
      {Object.keys(navbar).map(title => {
        const { type, children, slug } = navbar[title];
        if (type === NavbarItemType.CATEGORY) {
          return (
            <li className="nav-item sub-nav" key={slug + type}>
              <div className="nav-category">{title}</div>
              <NavLevel {...{ navbar: children }}></NavLevel>
            </li>
          );
        } else {
          return (
            <NavItem key={slug + type} path={'/document/' + slug} slug={slug}>
              {title}
            </NavItem>
          );
        }
      })}
    </ul>
  );
}
