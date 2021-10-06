import { h } from "preact";
import { useLayoutEffect } from "preact/hooks";
import { useSidebarCollapsedState } from "../state/hooks/use_sideba_collapsed_state";
import { NavbarItem } from "../utils/document_interfaces";
import { SidebarLink } from "./sidebar_link";

export const SidebarItem = (props: { item: NavbarItem }) => {
  const { item } = props;
  const { headings = [], depth, path } = item;
  const hasHeadings = headings.length > 0;
  const [collapsed, setCollapsed] = useSidebarCollapsedState(
    (state) =>
      [state.isCollapsed[path] ?? depth > 1, state.setCollapsed] as [
        boolean,
        (path: string, producer: (current: boolean) => boolean) => void
      ]
  );

  return (
    <li key={item.path + item.slug} className="navbar-item">
      <div
        className={`navbar-item-label${!collapsed ? " open" : ""}${
          hasHeadings ? " header" : ""
        } depth-${depth}`}
      >
        <SidebarLink item={item}></SidebarLink>
        {hasHeadings && (
          <button
            onClick={() =>
              setCollapsed(path, (isCollapsedBefore) => {
                return !(isCollapsedBefore ?? depth > 1);
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
      {hasHeadings && !collapsed && (
        <ul>
          {headings.map((heading) => {
            return (
              <li className={`sidebar-heading sidebar-heading-${heading.size}`}>
                <SidebarLink item={item} heading={heading}></SidebarLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
