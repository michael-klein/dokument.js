import * as React from 'react';
import { DocumentData } from '../../utils/document_provider';
import { docStoreActions, docStore } from '../docStore';

export function useSaveDocumentByNavId(id: string = ''): DocumentData {
  const documentMap = docStore.getRawState().documentMap;
  const [reRenderCount, setReRenderCount] = React.useState(0);
  const docRef = React.useRef(documentMap[id]);
  docRef.current = documentMap[id];
  React.useEffect(() => {
    if (!docRef.current) {
      docStoreActions.getSaveDocumentByNavId(id).then(document => {
        docRef.current = document;
        setReRenderCount(reRenderCount + 1);
      });
    }
  }, []);
  return docRef.current;
}
