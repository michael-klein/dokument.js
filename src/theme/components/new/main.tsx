import * as React from 'react';
import { useDocContext } from '../../../hooks/use_doc_context';
import { Switch, Route, useParams } from 'react-router';
import { useStoreState } from 'forimmer';
import { setCurrentDocument } from '../../../store/docStore';
import { DocumentRenderer } from './document_renderer';

function RenderArticle() {
  const { dokumentStore } = useDocContext();
  const [documentMap] = useStoreState(dokumentStore, state => [
    state.documentMap,
    state.currentDocument || null,
  ]);
  let { slug, headingSlug } = useParams<{
    slug: string;
    headingSlug: string;
  }>();
  const documentForSlug = !slug
    ? Object.values(documentMap)[0]
    : documentMap[slug];
  if (!headingSlug && documentForSlug) {
    headingSlug = documentForSlug.headings[0].slug;
  }
  React.useEffect(() => {
    if (documentForSlug) {
      setCurrentDocument(documentForSlug);
    }
  }, [slug, documentForSlug]);
  return (
    <DocumentRenderer slug={slug} headingSlug={headingSlug}></DocumentRenderer>
  );
}

export function Main(): JSX.Element {
  return (
    <>
      <article>
        <Switch>
          <Route path={`/:slug?/:headingSlug?`}>
            <React.Suspense fallback={<></>}>
              <RenderArticle></RenderArticle>
            </React.Suspense>
          </Route>
          <Route path={`/`}>
            <React.Suspense fallback={<></>}>
              <RenderArticle></RenderArticle>
            </React.Suspense>
          </Route>
        </Switch>
      </article>
    </>
  );
}
