import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { useStoreState } from 'forimmer';
import { DocSearchResult } from '../../search/search_index';

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
  return (
    <>
      {result.length > 0 && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg fixed top-20 max-w-4xl w-full">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Search Results
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {result.map((r, index) => {
                const doc = documentMap[r.slug];
                return (
                  <SearchResultsItem
                    doc={doc}
                    index={index}
                    searchQuery={searchQuery}
                  ></SearchResultsItem>
                );
              })}
            </dl>
          </div>
        </div>
      )}
    </>
  );
}
/*
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
*/
