import * as React from 'react';
import { useDocContext } from '../hooks/use_doc_context';
import { useDocStore } from '../store/hooks/use_doc_store';
import removeMarkdown from 'remove-markdown';
import Highlighter from 'react-highlight-words';
import { Link, useLocation } from 'react-router-dom';
import { useGetTo } from '../hooks/use_to';

function getSentencesWithSearchResults(
  text: string,
  searchWords: string[]
): string[] {
  return text.split(/[.?!\n]/).filter(function(n) {
    return new RegExp(`${searchWords.join('|')}`, 'i').test(n);
  });
}

export function SearchResults(props: { searchQuery: string }): JSX.Element {
  const { searchQuery } = props;
  const { search } = useDocContext();
  const documentMap = useDocStore(state => state.documentMap);
  const result = search(searchQuery);
  const getTo = useGetTo();
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
        })}
      </ul>
    </div>
  );
}

export function Search(): JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState('');
  const location = useLocation();
  React.useEffect(() => {
    setSearchQuery('');
  }, [location]);
  React.useEffect(() => {
    const listener: (event: MouseEvent) => void = event => {
      console.log(event);
      let target: HTMLElement = event.target as HTMLElement;
      while (target !== document.body) {
        if (target instanceof HTMLAnchorElement) {
          if (
            target.href.replace(
              window.location.href.replace(window.location.hash, ''),
              ''
            )[0] === '#'
          ) {
            setSearchQuery('');
            return;
          }
        }
        target = target.parentElement;
      }
    };
    document.body.addEventListener('click', listener);
    return () => {
      document.body.removeEventListener('click', listener);
    };
  }, []);
  return (
    <div className="search">
      {searchQuery.length > 0 && (
        <SearchResults searchQuery={searchQuery}></SearchResults>
      )}
      <input
        type="text"
        value={searchQuery}
        placeholder="search..."
        onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
          setSearchQuery(e.currentTarget.value)
        }
      ></input>
    </div>
  );
}
