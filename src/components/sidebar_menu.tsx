import { h } from "preact";
import { useNavbar } from "../state/docs";
import { useComponentList } from "../utils/component_list_context";

export const SidebarMenu = () => {
  const navbar = useNavbar();
  const { SidebarLevel } = useComponentList();
  return <SidebarLevel {...navbar}></SidebarLevel>;
};
