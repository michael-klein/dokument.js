import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { useStoreState } from 'forimmer';

export interface SearchResultsProps {
  searchQuery: string;
}

export function SearchResults(props: SearchResultsProps): JSX.Element {
  const { searchQuery } = props;
  const { search, componentList } = useDocContext();
  const { SearchResultsItem } = componentList;

  const { dokumentStore } = useDocContext();
  const [documentMap] = useStoreState(dokumentStore, state => [
    state.documentMap,
  ]);
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
