import { h } from "preact";
import { useComponentList } from "../utils/component_list_context";

export const Search = () => {
  const { SearchInput } = useComponentList();
  return (
    <div className="search">
      <SearchInput></SearchInput>
    </div>
  );
};
