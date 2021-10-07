import { Fragment, h } from "preact";
import { useLayoutEffect } from "preact/hooks";
import { useSidebarCollapsedState } from "../state/hooks/use_sideba_collapsed_state";
import { NavbarItem } from "../utils/document_interfaces";
import { SidebarLink } from "./sidebar_link";

export const TOC = (props: { item: NavbarItem }) => {
  const { item } = props;
  const { headings = [] } = item;
  const usableHeadings = headings.filter((h) => h.size > 1);
  const hasHeadings = usableHeadings.length > 0;
  return (
    <aside>
      <div>
        <b>table of contents</b>
        {hasHeadings && (
          <ul>
            {usableHeadings.map((heading, index) => {
              const next = usableHeadings[index + 1];
              const link = (
                <li
                  className={`sidebar-heading sidebar-heading-${heading.size}${
                    !next || next.size < heading.size ? " last" : ""
                  } sidebar-link`}
                >
                  <SidebarLink item={item} heading={heading}></SidebarLink>
                </li>
              );
              return link;
            })}
          </ul>
        )}
      </div>
    </aside>
  );
};
