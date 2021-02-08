import { h, Fragment } from "preact";
import { useComponentList } from "../utils/component_list_context";
import Router from "preact-router";
import Match from "preact-router/match";
import { useFlatNavbar } from "../state/hooks/use_flat_navbar";
import { useDocs } from "../state/hooks/use_docs";
import { useDocsOptions } from "../utils/docs_options_context";
import { join } from "../utils/file_utils";
import { createHashHistory } from "history";

export const Main = () => {
  const { DocumentRenderer } = useComponentList();
  const documents = useDocs(state => state.documents);
  const flatNavbar = useFlatNavbar();
  const { rootPath } = useDocsOptions();
  return (
    <main>
      <Match path="/">
        {({ matches, path, url }) => <pre className="bread-crumb">{url}</pre>}
      </Match>
      <Router history={createHashHistory()}>
        {
          <Fragment path="/">
            <DocumentRenderer slug={documents?.[0]?.slug}></DocumentRenderer>
          </Fragment>
        }
        {flatNavbar.map(({ path, slug }) => {
          const finalPath = join("/", rootPath, path);
          return (
            <Fragment path={finalPath}>
              <DocumentRenderer slug={slug}></DocumentRenderer>
            </Fragment>
          );
        })}
      </Router>
    </main>
  );
};
