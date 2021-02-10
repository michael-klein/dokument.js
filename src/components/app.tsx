import { h, Fragment } from "preact";
import Match from "preact-router/match";
import { Suspense } from "preact/compat";
import { useCurrentDocument } from "../state/hooks/use_current_document";
import { useComponentList } from "../utils/component_list_context";
import { useDocsOptions } from "../utils/docs_options_context";
import { join } from "../utils/file_utils";

const BreadCrumbs = () => {
  const document = useCurrentDocument();
  const { rootPath } = useDocsOptions();
  return (
    <Match path="">
      {({}) => {
        let sawMD = false;
        return (
          <div className="bread-crumb">
            {join(rootPath, document?.path ?? "")
              .split("/")
              .filter(p => {
                if (sawMD) {
                  return false;
                }
                if (p.includes(".md")) {
                  sawMD = true;
                }
                return p.length > 0 && p !== "#";
              })
              .map(part => {
                return <span key={part}>{part}</span>;
              })}
          </div>
        );
      }}
    </Match>
  );
};

export const App = () => {
  const { Header, Sidebar, Main } = useComponentList();
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
