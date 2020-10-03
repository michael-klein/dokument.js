import * as React from 'react';
import {
  Navbar,
  NavbarItemType,
  DocumentData,
} from '../../utils/document_interfaces';
import { useDocContext } from '../../hooks/use_doc_context';
import { useStoreState } from 'forimmer';
import { Menu } from 'antd';
const { SubMenu } = Menu;

export interface NavLevelProps {
  navbar: Navbar;
}
export function NavLevel(props: NavLevelProps): JSX.Element {
  const { navbar } = props;
  const { componentList } = useDocContext();
  const { dokumentStore } = useDocContext();
  const [docMap] = useStoreState(dokumentStore, state => [state.documentMap]);

  const { NavItem, NavLevel } = componentList;
  const titles: string[] = Object.keys(navbar);
  const docArray: DocumentData[] = Object.values(docMap);
  let prevDocument: DocumentData = docArray[0];
  //const getTo = useGetTo();

  return (
    <SubMenu>
      {titles.map(title => {
        const { type, children, slug } = navbar[title];
        if (type === NavbarItemType.CATEGORY) {
          const next = docArray[docArray.indexOf(prevDocument) + 1];
          if (next && next.slug) {
            //const [to] = getTo(next);
            //<Link to={to}>{title}</Link>

            return <NavLevel {...{ navbar: children }}></NavLevel>;
          } else {
            return <NavLevel {...{ navbar: children }}></NavLevel>;
          }
        } else {
          prevDocument = docMap[slug];
          return (
            <NavItem key={slug} path={'/document/' + slug} slug={slug}>
              {title}
            </NavItem>
          );
        }
      })}
    </SubMenu>
  );
}
