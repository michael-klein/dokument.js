import { DocumentData, DocumentHeading } from '../utils/document_provider';
import { join } from '../utils/file_utils';
import { useDocContext } from './use_doc_context';

export function useGetTo(): (doc: DocumentData) => [string, DocumentHeading] {
  const { rootPath } = useDocContext();
  return doc => {
    const topHeading: DocumentHeading =
      doc && doc.headings[0] && doc.headings[0].size === 1
        ? doc.headings[0]
        : undefined;
    return [
      join('/document', rootPath, doc.slug, topHeading ? topHeading.slug : ''),
      topHeading,
    ];
  };
}
