import { h } from "preact";
import { Link } from "preact-router/match";
import { useDocsOptions } from "../utils/docs_options_context";
import { DocumentHeading, NavbarItem } from "../utils/document_interfaces";
import { join } from "../utils/file_utils";

export const SidebarLink = (props: {
  item: NavbarItem;
  heading?: DocumentHeading;
}) => {
  const { rootPath } = useDocsOptions();
  const { item, heading } = props;
  return (
    <Link
      activeClassName="active"
      href={join("/", rootPath, item.path, heading ? heading.slug : "")}
    >
      {heading ? heading.text : item.title}
    </Link>
  );
};
