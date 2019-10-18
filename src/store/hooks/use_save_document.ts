import * as React from 'react';
import { DocumentData } from '../../utils/document_provider';
import { docStoreActions, docStore } from '../docStore';

export function useSaveDocument(slug: string = ''): DocumentData {
  const documentMap = docStore.getRawState().documentMap;
  const [reRenderCount, setReRenderCount] = React.useState(0);
  const docRef = React.useRef(documentMap[slug]);
  React.useEffect(() => {
    if (!docRef.current || docRef.current.slug !== slug) {
      docStoreActions.getSaveDocumentByNavId(slug).then(document => {
        docRef.current = document;
        setReRenderCount(reRenderCount + 1);
      });
    }
  }, [slug]);
  return docRef.current;
}
