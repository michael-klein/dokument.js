import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useDocContext } from '../../hooks/use_doc_context';
import { useStoreState } from 'forimmer';

function useClearSearchOnLinkClicked(setSearchQuery: (query: string) => void) {
  React.useEffect(() => {
    const listener: (event: MouseEvent) => void = event => {
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
  const { componentList, dokumentStore } = useDocContext();
  const { SearchResults } = componentList;
  const [searchQuery, setSearchQuery] = React.useState('');
  const location = useLocation();
  React.useEffect(() => {
    setSearchQuery('');
  }, [location]);
  useClearSearchOnLinkClicked(setSearchQuery);
  const [allDocumentsLoaded] = useStoreState(dokumentStore, state => [
    state.allDocumentsLoaded,
  ]);
  return (
    <div className="search">
      {searchQuery.length > 0 && (
        <SearchResults searchQuery={searchQuery}></SearchResults>
      )}
      <input
        type="text"
        value={searchQuery}
        placeholder={
          allDocumentsLoaded ? 'Search documents' : 'Preparing search...'
        }
        onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
          setSearchQuery(e.currentTarget.value)
        }
        disabled={!allDocumentsLoaded}
        onKeyUp={e => {
          if (e.key === 'Escape') {
            setSearchQuery('');
          }
        }}
      ></input>
    </div>
  );
}
