import { h, Fragment } from "preact";
import Match from "preact-router/match";
import { Suspense } from "preact/compat";
import { useCurrentDocument } from "../state/hooks/use_current_document";
import { useComponentList } from "../utils/component_list_context";
import { useDocsOptions } from "../utils/docs_options_context";
import { join } from "../utils/file_utils";

export const App = () => {
  const { Header, Sidebar, Main, BreadCrumbs } = useComponentList();
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="content">
        <Suspense fallback="">
          <BreadCrumbs></BreadCrumbs>
        </Suspense>
        <div className="main-wrapper">
          <Suspense fallback="...">
            <Main></Main>
          </Suspense>
        </div>
      </div>
    </>
  );
};
