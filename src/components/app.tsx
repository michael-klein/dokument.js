import { h, Fragment } from "preact";
import { useComponentList } from "../utils/component_list_context";
import Router from "preact-router";
import Match from "preact-router/match";
import { useDocs } from "../state/docs";
import { useDocsOptions } from "../utils/docs_options_context";
import { join } from "../utils/file_utils";
import { createHashHistory } from "history";
import { DocumentRenderer } from "./document_renderer";

export const App = () => {
  const { Header, Sidebar } = useComponentList();
  const documents = useDocs(state => state.documents) ?? {};
  const { rootPath } = useDocsOptions();
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="main-wrapper">
        <main>
          <Match path="/">
            {({ matches, path, url }) => (
              <pre className="bread-crumb">{url}</pre>
            )}
          </Match>
          <Router history={createHashHistory()}>
            {Object.values(documents).map(doc => {
              console.log(join("/", rootPath, doc.path));
              const path = join("/", rootPath, doc.path);

              return (
                <Fragment path={path}>
                  <DocumentRenderer slug={doc.slug}></DocumentRenderer>
                </Fragment>
              );
            })}
          </Router>
        </main>
      </div>
    </>
  );
};
