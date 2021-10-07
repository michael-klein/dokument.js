import { h } from "preact";
import { useComponentList } from "../utils/component_list_context";
import { Navbar } from "../utils/document_interfaces";

export const SidebarLevel = (level: Navbar) => {
  const { SidebarItem, SidebarCategory } = useComponentList();
  const itemKeys = Object.keys(level);
  return (
    <ul>
      {itemKeys.map((key, index) => {
        const item = level[key];
        if (!item.children) {
          return <SidebarItem key={key} item={item}></SidebarItem>;
        } else {
          return (
            <SidebarCategory
              key={key}
              label={key}
              childNav={item.children}
            ></SidebarCategory>
          );
        }
      })}
    </ul>
  );
};
