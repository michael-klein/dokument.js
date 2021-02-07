import { h } from "preact";
import { NavbarItem } from "../utils/document_interfaces";
import { SidebarLink } from "./sidebar_link";

export const SidebarItem = (props: { item: NavbarItem }) => {
  const { item } = props;
  return (
    <li key={item.path + item.slug} className="navbar_item">
      <SidebarLink item={item}></SidebarLink>
    </li>
  );
};
