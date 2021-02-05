import { h } from "preact";
import { Link } from "preact-router/match";
import { useDocsOptions } from "../utils/docs_options_context";
import { join } from "../utils/file_utils";

export const SidebarItem = (props: {
  key: string;
  label: string;
  path: string;
}) => {
  const { rootPath } = useDocsOptions();
  return (
    <li key={props.key} className="navbar_item">
      <Link activeClassName="active" href={join("/", rootPath, props.path)}>
        {props.label}
      </Link>
    </li>
  );
};
