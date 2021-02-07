import { h } from "preact";
import { useComponentList } from "../utils/component_list_context";
import { search } from "ss-search";
import { useDocuments } from "../state/docs";
import { useCallback } from "preact/hooks";

export const Search = () => {
  const { SearchInput } = useComponentList();
  const documents = Object.values(useDocuments());
  const handleQuery = useCallback(
    (query: string) => {
      const result = search(documents, ["title", "content"], query);
      console.log(result);
    },
    [documents.length]
  );
  return (
    <div className="search">
      <SearchInput onChange={handleQuery}></SearchInput>
    </div>
  );
};
