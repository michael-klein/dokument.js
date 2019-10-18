import * as React from 'react';
import { Link } from 'react-router-dom';
import { DocumentHeading } from '../utils/document_provider';
import { useDocStore } from '../store/hooks/use_doc_store';

export interface NavItemProps {
  path: string;
  slug?: string;
  children: React.ReactNode;
}
export function NavItem(props: NavItemProps): JSX.Element {
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
