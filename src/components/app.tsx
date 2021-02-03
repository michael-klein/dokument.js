import { h, Fragment } from "preact";
import { useComponentList } from "../utils/component_list_context";

export const App = () => {
  const { Header, Sidebar } = useComponentList();
  return (
    <>
      <Header></Header>
      <div className="content">
        <Sidebar></Sidebar>
      </div>
    </>
  );
};
