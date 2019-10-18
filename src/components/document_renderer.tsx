import * as React from 'react';

// tslint:disable
import MDX from '@mdx-js/runtime';
import { useSaveDocumentByNavId } from '../store/hooks/use_document';
import { useDocContext } from '../hooks/use_doc_context';
import { DocumentData } from '../utils/document_provider';
import { Link } from 'react-router-dom';
import innerText from 'react-innertext';
import { useDocStore } from '../store/hooks/use_doc_store';

export interface MDXContext {
  currentDocument?: DocumentData;
}
let hCount: number = 0;
export const mdxContext: React.Context<MDXContext> = React.createContext({});
const components: { [key: string]: React.FunctionComponent } = {
  Demo: () => <h1>This is a demo component</h1>,
};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(h => {
  components[h] = (props: any) => {
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
});

export function DocumentRenderer(props: {
  slug: string;
  headingSlug: string;
}): JSX.Element {
  const { rehypePlugins, remarkPlugins, componentList } = useDocContext();
  const { PreviousAndNext } = componentList;
  const Provider = mdxContext.Provider;

  const currentDocument = useSaveDocumentByNavId(props.slug);
  React.useEffect(() => {
    const heading: HTMLElement = document.getElementById(props.headingSlug);
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.headingSlug, currentDocument]);

  const documentMap = useDocStore(state => state.documentMap);

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
  return currentDocument ? (
    <Provider value={{ currentDocument }}>
      <PreviousAndNext previous={previous} next={next}></PreviousAndNext>
      <div>
        <MDX
          components={components}
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
        >
          {currentDocument.content}
        </MDX>
      </div>
      <PreviousAndNext previous={previous} next={next}></PreviousAndNext>
    </Provider>
  ) : (
    <div>loading document...</div>
  );
}
