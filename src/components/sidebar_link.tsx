import { h } from "preact";
import { Link } from "preact-router/match";
import { useDocsOptions } from "../utils/docs_options_context";
import { NavbarItem } from "../utils/document_interfaces";
import { join } from "../utils/file_utils";

export const SidebarLink = (props: { item: NavbarItem }) => {
  const { rootPath } = useDocsOptions();
  const { item } = props;
  return (
    <Link activeClassName="active" href={join("/", rootPath, item.path)}>
      {item.title}
    </Link>
  );
};
