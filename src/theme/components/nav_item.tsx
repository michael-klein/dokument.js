import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  DocumentHeading,
  Navbar,
  NavbarItemType,
} from '../../utils/document_interfaces';
import { useStoreState } from 'forimmer';
import { useDocContext } from '../../hooks/use_doc_context';
import { Menu } from 'antd';

export interface NavItemProps {
  path: string;
  slug?: string;
  children: React.ReactNode;
}
export function NavItem(props: NavItemProps): JSX.Element {
  const { dokumentStore, componentList } = useDocContext();
  const [documentMap] = useStoreState(dokumentStore, state => [
    state.documentMap,
  ]);
  const { NavLevel } = componentList;

  const document = documentMap[props.slug];
  const topHeading: DocumentHeading =
    document && document.headings[0] && document.headings[0].size === 1
      ? document.headings[0]
      : undefined;
  const path = `${props.path}${topHeading ? `/${topHeading.slug}` : ``}`;
  const linkRef = React.useRef<HTMLAnchorElement>(undefined);
  const subNav: Navbar =
    document &&
    document.headings
      .filter(
        (heading: DocumentHeading, index: number) =>
          heading.size < 4 && (index > 0 || heading.size > 1)
      )
      .reduce(
        (memo, heading) => {
          memo[heading.text] = {
            type: NavbarItemType.DOCUMENT,
            slug: `${props.path}/${heading.slug}`.replace('document/', ''),
          };
          return memo;
        },
        {} as Navbar
      );
  return (
    <>
      <Menu.Item key={path} onClick={() => linkRef.current.click()}>
        <Link
          to={`${props.path}${topHeading ? `/${topHeading.slug}` : ``}`}
          ref={linkRef}
        >
          {topHeading ? topHeading.text : props.children}
        </Link>
      </Menu.Item>
      {subNav && <NavLevel navbar={subNav}></NavLevel>}
    </>
  );
}
