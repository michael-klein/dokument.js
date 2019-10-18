import * as React from 'react';
import { useDocContext } from '../hooks/use_doc_context';
import { Switch, Route, useParams } from 'react-router';
function RenderArticle() {
  const { DocumentRenderer } = useDocContext().componentList;
  let { slug, headingSlug } = useParams();
  return (
    <DocumentRenderer slug={slug} headingSlug={headingSlug}></DocumentRenderer>
  );
}

export function Main(): JSX.Element {
  return (
    <main>
      <article>
        <Switch>
          <Route path={`/document/:slug/:headingSlug?`}>
            <RenderArticle></RenderArticle>
          </Route>
        </Switch>
      </article>
    </main>
  );
}
