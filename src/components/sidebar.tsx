import { h } from "preact";
import { useNavbar } from "../state/docs";
import { useComponentList } from "../utils/component_list_context";

export const Sidebar = () => {
  const navbar = useNavbar() ?? {};
  const { SidebarLevel } = useComponentList();
  return (
    <nav className="sidebar">
      <SidebarLevel {...navbar}></SidebarLevel>
    </nav>
  );
};
