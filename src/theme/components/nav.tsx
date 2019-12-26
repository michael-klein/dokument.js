import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { useStoreState } from 'forimmer';

export function Nav(): JSX.Element {
  const { dokumentStore } = useDocContext();
  const [navbar] = useStoreState(dokumentStore, state => [state.navbar]);

  const { NavLevel } = useDocContext().componentList;
  return (
    <nav>
      <NavLevel {...{ navbar }}></NavLevel>
    </nav>
  );
}
