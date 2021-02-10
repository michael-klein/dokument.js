import { h, Fragment } from "preact";
import { useComponentList } from "../utils/component_list_context";
import Router from "preact-router";
import { useFlatNavbar } from "../state/hooks/use_flat_navbar";
import { useDocs } from "../state/hooks/use_docs";
import { useDocsOptions } from "../utils/docs_options_context";
import { join } from "../utils/file_utils";
import { createHashHistory } from "history";
import { useDocument } from "../state/hooks/use_document";
import { Suspense, useEffect } from "preact/compat";

const RendererWrapper = (props: { slug: string }) => {
  const document = useDocument(props.slug);
  const { DocumentRenderer } = useComponentList();
  const setCurrentDocument = useDocs(state => state.setCurrentDocument);
  useEffect(() => {
    setCurrentDocument(document);
  }, [document]);
  return <DocumentRenderer></DocumentRenderer>;
};
const FallbackDocumentRenderer = () => {
  const fallbackDocumentSlug = useDocs(
    state => Object.values(state.documents)[0].slug
  );

  return <RendererWrapper slug={fallbackDocumentSlug}></RendererWrapper>;
};
export const Main = () => {
  const flatNavbar = useFlatNavbar();
  const { rootPath } = useDocsOptions();
  return (
    <main>
      <Router history={createHashHistory() as any}>
        {
          <Fragment default>
            <Suspense fallback="/">
              <FallbackDocumentRenderer></FallbackDocumentRenderer>
            </Suspense>
          </Fragment>
        }
        {flatNavbar.map(({ path, slug }) => {
          const finalPath = join("/", rootPath, path, ":*");
          return (
            <Fragment path={finalPath}>
              <RendererWrapper slug={slug}></RendererWrapper>
            </Fragment>
          );
        })}
      </Router>
    </main>
  );
};
