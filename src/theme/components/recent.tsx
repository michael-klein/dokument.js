import * as React from 'react';
import { DocumentData } from '../../utils/document_interfaces';
import { Link } from 'react-router-dom';
import { useGetTo } from '../../hooks/use_to';
import { useStoreState } from 'forimmer';
import { useDocContext } from '../../hooks/use_doc_context';
interface RecentDocument {
  document: DocumentData;
  timestamp: number;
}
export function Recent(): JSX.Element {
  const { dokumentStore } = useDocContext();
  const [currentDocument] = useStoreState(dokumentStore, state => [
    state.currentDocument,
  ]);
  const [recentDocuments, setRecentDocuments] = React.useState(
    (localStorage.getItem('recent-document')
      ? JSON.parse(localStorage.getItem('recent-document'))
      : []) as RecentDocument[]
  );
  React.useEffect(() => {
    if (currentDocument) {
      const index: number = recentDocuments.findIndex(
        ({ document }) => currentDocument.slug === document.slug
      );
      if (index > -1) {
        recentDocuments.splice(index, 1);
      }
      recentDocuments.unshift({
        document: currentDocument,
        timestamp: Date.now(),
      });
      setRecentDocuments(recentDocuments);
      localStorage.setItem('recent-document', JSON.stringify(recentDocuments));
    }
  }, [currentDocument]);
  const getTo = useGetTo();
  return (
    <div className="recent">
      <div>recently viewed:</div>
      <ul>
        {recentDocuments.map(({ document, timestamp }) => {
          const [to, heading] = getTo(document);
          return (
            <li key={heading.text + timestamp}>
              <span className="recent-time">
                {new Date(timestamp).toLocaleString()}
              </span>
              <Link to={to}>{heading.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
