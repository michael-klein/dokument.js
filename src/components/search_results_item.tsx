import * as React from 'react';
import removeMarkdown from 'remove-markdown';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { useGetTo } from '../hooks/use_to';
import { DocumentData } from '../utils/document_provider';

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
  searchQuery: string;
}

export function SearchResultsItem(props: SearchResultsItemProps) {
  const { doc, searchQuery } = props;
  const getTo = useGetTo();
  return (
    <li key={doc.slug}>
      <label>
        <Link to={getTo(doc)}>
          <Highlighter
            highlightClassName="search-highlight"
            searchWords={[searchQuery]}
            autoEscape={true}
            textToHighlight={doc.title}
          />
        </Link>
      </label>
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
    </li>
  );
}
