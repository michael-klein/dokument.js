import { h } from "preact";
import { Suspense } from "preact/compat";
import { useComponentList } from "../utils/component_list_context";

export const Sidebar = () => {
  const { SidebarMenu } = useComponentList();
  return (
    <nav className="sidebar">
      <Suspense fallback="">
        <SidebarMenu></SidebarMenu>
      </Suspense>
    </nav>
  );
};
