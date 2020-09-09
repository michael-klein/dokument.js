import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { useStoreState } from 'forimmer';
import { DocSearchResult } from 'search/search_index';

export interface SearchResultsProps {
  searchQuery: string;
}

const useSearch = (query: string) => {
  const [result, setResult] = React.useState<DocSearchResult[]>([]);
  const timeOutId = React.useRef(0);
  const { search } = useDocContext();
  React.useEffect(() => {
    clearTimeout(timeOutId.current);
    timeOutId.current = setTimeout(() => {
      const result = search(query);
      setResult(result);
    }, 500);
  }, [query]);
  return result;
};

export function SearchResults(props: SearchResultsProps): JSX.Element {
  const { searchQuery } = props;
  const { componentList } = useDocContext();
  const { SearchResultsItem } = componentList;

  const { dokumentStore } = useDocContext();
  const [documentMap] = useStoreState(dokumentStore, state => [
    state.documentMap,
  ]);
  const result = useSearch(searchQuery);
  console.log(result);
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
