import * as React from 'react';
import { useDocStore } from '../store/hooks/use_doc_store';
import { useDocContext } from '../hooks/use_doc_context';

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
