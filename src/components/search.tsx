import * as React from 'react';
import { useDocContext } from '../hooks/use_doc_context';
import { useDocStore } from '../store/hooks/use_doc_store';
import removeMarkdown from 'remove-markdown';
import Highlighter from 'react-highlight-words';
import { Link, useLocation } from 'react-router-dom';
import { DocumentHeading } from '../document_handling/document_provider';
import { join } from '../document_handling/file_utils';

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
  const { search, rootPath } = useDocContext();
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
          const topHeading: DocumentHeading =
            doc && doc.headings[0] && doc.headings[0].size === 1
              ? doc.headings[0]
              : undefined;
          const to: string = join(
            '/document',
            rootPath,
            doc.slug,
            topHeading ? topHeading.slug : ''
          );
          return (
            <li key={doc.slug}>
              <label>
                <Link to={to}>
                  <Highlighter
                    highlightClassName="search-highlight"
                    searchWords={[searchQuery]}
                    autoEscape={true}
                    textToHighlight={doc.title}
                  />
                </Link>
              </label>
              <pre>
                <Highlighter
                  highlightClassName="search-highlight"
                  searchWords={[searchQuery]}
                  autoEscape={true}
                  textToHighlight={getSentencesWithSearchResults(
                    removeMarkdown(doc.content),
                    [searchQuery]
                  ).join('\n')}
                />
              </pre>
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
      if (
        event.target instanceof HTMLAnchorElement &&
        event.target.href.replace(
          window.location.href.replace(window.location.hash, ''),
          ''
        )[0] === '#'
      ) {
        setSearchQuery('');
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
