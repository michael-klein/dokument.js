import * as React from 'react';
import {
  Navbar,
  NavbarItemType,
  DocumentData,
} from '../../utils/document_provider';
import { useDocContext } from '../../hooks/use_doc_context';
import { Link } from 'react-router-dom';
import { useGetTo } from '../../hooks/use_to';
import { useStoreState } from 'forimmer';

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
  const getTo = useGetTo();
  return (
    <ul className="nav">
      {titles.map(title => {
        const { type, children, slug } = navbar[title];
        if (type === NavbarItemType.CATEGORY) {
          const next = docArray[docArray.indexOf(prevDocument) + 1];
          if (next && next.slug) {
            const [to] = getTo(next);
            return (
              <li className="nav-item sub-nav" key={slug}>
                <Link to={to}>{title}</Link>
                <NavLevel {...{ navbar: children }}></NavLevel>
              </li>
            );
          } else {
            return (
              <li className="nav-item sub-nav" key={slug}>
                <div className="nav-category">{title}</div>
                <NavLevel {...{ navbar: children }}></NavLevel>
              </li>
            );
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
    </ul>
  );
}
