import { head } from "lodash";
import { h } from "preact";
import { NavbarItem } from "../utils/document_interfaces";
import { SidebarLink } from "./sidebar_link";

export const SidebarItem = (props: { item: NavbarItem }) => {
  const { item } = props;
  const { headings = [] } = item;
  return (
    <li key={item.path + item.slug} className="navbar_item">
      <SidebarLink item={item}></SidebarLink>
      {headings.length > 0 && (
        <ul>
          {headings.map(heading => {
            return (
              <li>
                <SidebarLink item={item} heading={heading}></SidebarLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
