import * as React from 'react';

import { htmdx } from 'htmdx';
import { useDocContext } from '../../hooks/use_doc_context';
import { Link } from 'react-router-dom';
import innerText from 'react-innertext';
import { LastChanged } from './last_changed';
import { useStoreState } from 'forimmer';
import { DocumentData } from '../../utils/document_interfaces';
import scrollIntoView from 'scroll-into-view';

export interface MDXContext {
  currentDocument?: DocumentData;
}
let hCount: number = 0;
export const mdxContext: React.Context<MDXContext> = React.createContext({});
const components: { [key: string]: React.FunctionComponent } = {
  Demo: () => <h1>This is a demo component</h1>,
};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(h => {
  const Component = (props: any): JSX.Element => {
    const { currentDocument } = React.useContext(mdxContext);
    let check = props.children;
    if (check instanceof Array) {
      check = React.createElement('div', { children: props.children });
    }
    const text: string = React.isValidElement(check)
      ? innerText(check)
      : props.children;
    const heading = currentDocument.headings.find(heading =>
      text.toString().includes(heading.text)
    );
    return React.createElement(h, {
      key: h + hCount++,
      id: heading && heading.slug,
      children: [
        <>
          {heading ? (
            <Link to={`${heading.slug}`}>{heading.text}</Link>
          ) : (
            props.children
          )}
        </>,
      ],
    });
  };
  components[h] = Component;
});

export interface DocumentRendererProps {
  slug: string;
  headingSlug: string;
}

export function DocumentRenderer(props: DocumentRendererProps): JSX.Element {
  const {
    componentList,
    htmdxOptions = { components: {} },
    dokumentStore,
  } = useDocContext();
  const { PreviousAndNext } = componentList;
  const Provider = mdxContext.Provider;
  const { scrollContainerSelector } = useDocContext();

  const [documentMap, currentDocument] = useStoreState(dokumentStore, state => [
    state.documentMap,
    state.currentDocument,
  ]);

  React.useEffect(() => {
    const heading: HTMLElement = document.getElementById(props.headingSlug);
    if (heading) {
      const scrollTarget =
        heading.parentElement.firstElementChild === heading
          ? document.querySelector('article')
          : heading;
      scrollIntoView(scrollTarget, {
        validTarget: function(target: HTMLElement) {
          return target.matches && target.matches(scrollContainerSelector);
        },
        align: {
          top: 0,
        },
      });
    }
  }, [props.headingSlug, currentDocument]);

  let previous: DocumentData;
  let next: DocumentData;
  if (currentDocument) {
    const slugs: string[] = Object.keys(documentMap);
    const docIndex: number = slugs.indexOf(currentDocument.slug);
    if (docIndex > 0) {
      previous = documentMap[slugs[docIndex - 1]];
    }
    if (docIndex < slugs.length - 1) {
      next = documentMap[slugs[docIndex + 1]];
    }
  }
  return (
    <Provider value={{ currentDocument }}>
      <PreviousAndNext previous={previous} next={next}></PreviousAndNext>
      <div>
        {htmdx(currentDocument.content, React.createElement, {
          ...htmdxOptions,
          components: { ...components, ...htmdxOptions.components },
        })}
      </div>
      <PreviousAndNext previous={previous} next={next}></PreviousAndNext>
      {currentDocument.lastModified > -1 && (
        <LastChanged timestamp={currentDocument.lastModified}></LastChanged>
      )}
    </Provider>
  );
}
