import { h, Fragment } from "preact";
import Match from "preact-router/match";
import { Suspense } from "preact/compat";
import { useComponentList } from "../utils/component_list_context";

const BreadCrumbs = () => {
  return (
    <Match path="">
      {({}) => (
        <div className="bread-crumb">
          {window.location.hash
            .split("/")
            .filter(p => p.length > 0 && p !== "#")
            .map(part => {
              return <span key={part}>{part}</span>;
            })}
        </div>
      )}
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
        <BreadCrumbs></BreadCrumbs>
        <div className="main-wrapper">
          <Suspense fallback="...">
            <Main></Main>
          </Suspense>
        </div>
      </div>
    </>
  );
};
