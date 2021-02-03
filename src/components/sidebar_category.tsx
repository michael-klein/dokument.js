import { Navbar } from "../utils/document_interfaces";
import { h } from "preact";
import { useComponentList } from "../utils/component_list_context";

export const SidebarCategory = (props: {
  key: string;
  label: string;
  childNav: Navbar;
}) => {
  const { SidebarLevel } = useComponentList();
  return (
    <li key={props.key} className="navbar_category">
      <div>{props.label}</div>
      <SidebarLevel {...props.childNav}></SidebarLevel>
    </li>
  );
};
