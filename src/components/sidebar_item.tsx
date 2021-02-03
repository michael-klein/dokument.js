import { h } from "preact";

export const SidebarItem = (props: { key: string; label: string }) => {
  return (
    <li key={props.key} className="navbar_item">
      {props.label}
    </li>
  );
};
