import { h, Fragment } from "preact";
import { Suspense } from "preact/compat";
import { useComponentList } from "../utils/component_list_context";

export const App = () => {
  const { Header, Sidebar, Main } = useComponentList();
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="main-wrapper">
        <Suspense fallback="...">
          <Main></Main>
        </Suspense>
      </div>
    </>
  );
};
