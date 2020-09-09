import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';

export function Header(): JSX.Element {
  const { componentList, title } = useDocContext();
  const { Search, Branding } = componentList;
  return (
    <header className="header">
      <Branding>{title}</Branding>
      <Search></Search>
    </header>
  );
}
