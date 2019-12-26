import * as React from 'react';
import { useDocContext } from '../../hooks/use_doc_context';
import { Switch, Route, useParams } from 'react-router';
import { useStoreState } from 'forimmer';
import { setCurrentDocument } from '../../store/docStore';
function RenderArticle() {
  const { componentList, dokumentStore } = useDocContext();
  const { DocumentRenderer } = componentList;
  const [documentMap] = useStoreState(dokumentStore, state => [
    state.documentMap,
    state.currentDocument || null,
  ]);
  let { slug, headingSlug } = useParams();
  React.useEffect(() => {
    if (documentMap[slug]) {
      setCurrentDocument(documentMap[slug]);
    } else {
      setCurrentDocument(Object.values(documentMap)[0]);
    }
  }, [slug]);
  return (
    <DocumentRenderer slug={slug} headingSlug={headingSlug}></DocumentRenderer>
  );
}

export function Main(): JSX.Element {
  const { Loading } = useDocContext().componentList;
  return (
    <main>
      <article>
        <Switch>
          <Route path={`/document/:slug?/:headingSlug?`}>
            <React.Suspense fallback={<Loading></Loading>}>
              <RenderArticle></RenderArticle>
            </React.Suspense>
          </Route>
          <Route path={`/`}>
            <React.Suspense fallback={<Loading></Loading>}>
              <RenderArticle></RenderArticle>
            </React.Suspense>
          </Route>
        </Switch>
      </article>
    </main>
  );
}
