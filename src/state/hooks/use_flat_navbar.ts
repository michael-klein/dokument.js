import { useDocs } from "./use_docs";

export const useFlatNavbar = () => {
  return useDocs(state => state.flatNavbar);
};
