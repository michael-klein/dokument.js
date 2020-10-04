import * as React from 'react';
import { useLocation } from 'react-router-dom';

function useHandleSearchFocus(
  searchQuery: string,
  setSearchQuery: (query: string) => void,
  inputRef: React.MutableRefObject<HTMLInputElement>
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
      if (target === document.body) {
        setSearchQuery(null);
        return;
      }
      while (target !== document.body) {
        if (target instanceof HTMLAnchorElement) {
          if (
            target.href.replace(
              window.location.href.replace(window.location.hash, ''),
              ''
            )[0] === '#'
          ) {
            setSearchQuery(null);
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
  const [searchQuery, setSearchQuery] = React.useState<string>(null);
  const inputRef = React.useRef<HTMLInputElement>();

  useHandleSearchFocus(searchQuery, setSearchQuery, inputRef);

  return <></>;
}
