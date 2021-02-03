import { h } from "preact";
import { useComponentList } from "../utils/component_list_context";
import { Navbar } from "../utils/document_interfaces";

export const SidebarLevel = (level: Navbar) => {
  const { SidebarItem, SidebarCategory } = useComponentList();
  return (
    <ul>
      {Object.keys(level).map(key => {
        const item = level[key];
        if (!item.children) {
          return <SidebarItem key={key} label={key}></SidebarItem>;
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
