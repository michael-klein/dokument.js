import * as React from 'react';
import removeMarkdown from 'remove-markdown';
import Highlighter from 'react-highlight-words';
import { useHistory } from 'react-router-dom';
import { useGetTo } from '../../hooks/use_to';
import { DocumentData } from '../../utils/document_interfaces';

function getSentencesWithSearchResults(
  text: string,
  searchWords: string[]
): string[] {
  return text.split(/[.?!\n]/).filter(function(n) {
    return new RegExp(`${searchWords.join('|')}`, 'i').test(n);
  });
}

export interface SearchResultsItemProps {
  doc: DocumentData;
  index: number;
  searchQuery: string;
}

export function SearchResultsItem(props: SearchResultsItemProps) {
  const { doc, searchQuery, index } = props;
  const getTo = useGetTo();
  const history = useHistory();
  return (
    <div
      className={`cursor-pointer px-4 py-5 sm:grid sm:grid-cols-8 sm:gap-4 sm:px-6 ${
        index % 2 ? 'bg-white' : 'bg-gray-50'
      }`}
      key={doc.slug}
      onClick={() => {
        history.push(getTo(doc)[0]);
      }}
    >
      <dt className="text-sm font-medium text-gray-500">
        <Highlighter
          highlightClassName="search-highlight"
          searchWords={[searchQuery]}
          autoEscape={true}
          textToHighlight={doc.title}
        />
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-7">
        {getSentencesWithSearchResults(removeMarkdown(doc.content), [
          searchQuery,
        ]).map(item => (
          <pre key={item}>
            <Highlighter
              highlightClassName="search-highlight"
              searchWords={[searchQuery]}
              autoEscape={true}
              textToHighlight={item}
            />
          </pre>
        ))}
      </dd>
    </div>
  );
}
