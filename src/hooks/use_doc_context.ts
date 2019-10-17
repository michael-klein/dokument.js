import * as React from 'react';
import { docContext } from '../doc_context';

export function useDocContext() {
  return React.useContext(docContext);
}
