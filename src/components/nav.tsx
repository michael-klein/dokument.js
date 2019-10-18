import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarItemType,
  DocumentHeading,
} from '../utils/document_provider';
import { useDocStore } from '../store/hooks/use_doc_store';
import { useDocContext } from '../hooks/use_doc_context';

export function NavItem(props: {
  path: string;
  slug?: string;
  children: React.ReactNode;
}): JSX.Element {
  const documentMap = useDocStore(state => state.documentMap);
  const document = documentMap[props.slug];
  const topHeading: DocumentHeading =
    document && document.headings[0] && document.headings[0].size === 1
      ? document.headings[0]
      : undefined;
  return (
    <li className="nav-item link">
      <Link to={`${props.path}${topHeading ? `/${topHeading.slug}` : ``}`}>
        {topHeading ? topHeading.text : props.children}
      </Link>
      {document && (
        <ul className="nav">
          {document.headings
            .filter(
              (heading: DocumentHeading, index: number) =>
                heading.size < 4 && (index > 0 || heading.size > 1)
            )
            .map(heading => {
              return (
                <NavItem
                  key={heading.raw}
                  path={`${props.path}/${heading.slug}`}
                >
                  {heading.text}
                </NavItem>
              );
            })}
        </ul>
      )}
    </li>
  );
}

export function NavLevel(props: { navbar: Navbar }): JSX.Element {
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

export function Nav(): JSX.Element {
  const [documentsLoaded, navbar] = useDocStore(state => [
    state.documentsLoaded,
    state.navbar,
  ]);
  const { NavLevel } = useDocContext().componentList;
  return !documentsLoaded ? (
    <div>loading navbar...</div>
  ) : (
    <nav>
      <NavLevel {...{ navbar }}></NavLevel>
    </nav>
  );
}
