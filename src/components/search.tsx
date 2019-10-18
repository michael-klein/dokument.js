import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useDocContext } from '../hooks/use_doc_context';

function useClearSearchOnLinkClicked(setSearchQuery: (query: string) => void) {
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
}

export function Search(): JSX.Element {
  const { SearchResults } = useDocContext().componentList;
  const [searchQuery, setSearchQuery] = React.useState('');
  const location = useLocation();
  React.useEffect(() => {
    setSearchQuery('');
  }, [location]);
  useClearSearchOnLinkClicked(setSearchQuery);
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
        onKeyUp={e => {
          if (e.key === 'Escape') {
            setSearchQuery('');
          }
        }}
      ></input>
    </div>
  );
}
