import { DocumentData, DocumentMap } from '../utils/document_provider';
import { useDocContext } from './use_doc_context';

export function useSaveDocument(slug: string = ''): DocumentData {
  const { docStore } = useDocContext();

  let documentMap: DocumentMap = docStore.getRawState().documentMap;

  let document: DocumentData = documentMap[slug];
  if (!document) {
    return Object.values(documentMap)[0];
  }
  return document;
}
