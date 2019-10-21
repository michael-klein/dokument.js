import * as React from 'react';
import { useDocContext } from '../hooks/use_doc_context';
import { useDocStore } from '../store/hooks/use_doc_store';

export interface SearchResultsProps {
  searchQuery: string;
}

export function SearchResults(props: SearchResultsProps): JSX.Element {
  const { searchQuery } = props;
  const { search, componentList } = useDocContext();
  const { SearchResultsItem } = componentList;
  const documentMap = useDocStore(state => state.documentMap);
  const result = search(searchQuery);
  return (
    <div className={'search-results'}>
      <h1>
        Listing {result.length} document{result.length !== 1 ? 's' : ''} with
        search results for {searchQuery}:
      </h1>
      <ul>
        {result.map(r => {
          const doc = documentMap[r.slug];
          return (
            <SearchResultsItem
              doc={doc}
              searchQuery={searchQuery}
            ></SearchResultsItem>
          );
        })}
      </ul>
    </div>
  );
}
