import { useDocContext } from '../../hooks/use_doc_context';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

function useHandleSearchFocus(
  searchQuery: string,
  setSearchQuery: (query: string) => void,
  inputRef: React.MutableRefObject<HTMLInputElement>,
  containerRef: React.MutableRefObject<HTMLDivElement>
) {
  const location = useLocation();
  React.useEffect(() => {
    setSearchQuery(null);
  }, [location]);
  React.useLayoutEffect(() => {
    if (searchQuery === null) {
      inputRef.current.blur();
    }
  }, [searchQuery]);
  React.useEffect(() => {
    const listener: (event: MouseEvent) => void = event => {
      let target: HTMLElement = event.target as HTMLElement;
      if (
        target === document.body ||
        (target !== containerRef.current &&
          !containerRef.current.contains(target))
      ) {
        setSearchQuery(null);
        return;
      }
    };
    document.body.addEventListener('click', listener);
    return () => {
      document.body.removeEventListener('click', listener);
    };
  }, []);

  React.useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchQuery(null);
      }
    };
    inputRef.current.addEventListener('keyup', listener);
    return () => {
      inputRef.current.removeEventListener('keyup', listener);
    };
  }, [inputRef.current]);

  React.useEffect(() => {
    const listener = () => {
      setSearchQuery('');
    };
    inputRef.current.addEventListener('focus', listener);
    return () => {
      inputRef.current.removeEventListener('focus', listener);
    };
  }, [inputRef.current]);
}

export function Search(): JSX.Element {
  const { componentList } = useDocContext();
  const { SearchResults } = componentList;
  const [searchQuery, setSearchQuery] = React.useState<string>(null);
  const inputRef = React.useRef<HTMLInputElement>();
  const containerRef = React.useRef<HTMLDivElement>();

  useHandleSearchFocus(searchQuery, setSearchQuery, inputRef, containerRef);

  return (
    <div
      className="flex-auto flex items-center justify-center pl-2 pr-2"
      ref={containerRef}
    >
      <input
        value={searchQuery ?? null}
        type="text"
        placeholder="...search"
        className="rounded-sm p-1 w-full max-w-md"
        ref={inputRef}
        onChange={e => setSearchQuery((e.target as HTMLInputElement).value)}
      ></input>
      <SearchResults searchQuery={searchQuery}></SearchResults>
    </div>
  );
}
