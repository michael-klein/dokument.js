import { h } from "preact";
import { useComponentList } from "../utils/component_list_context";
import { search } from "ss-search";
import { useDocuments } from "../state/hooks/use_documents";
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
      <button className="go">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <SearchInput onChange={handleQuery}></SearchInput>
    </div>
  );
};
