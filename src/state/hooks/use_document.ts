import { useDocsOptions } from "../../utils/docs_options_context";
import { fetchDocumentNowBySlug } from "../../utils/document_provider";
import { useDocs } from "./use_docs";
import { useFlatNavbar } from "./use_flat_navbar";
export const useDocument = (slug: string, fallBackToFirst: boolean = false) => {
  const { rootPath } = useDocsOptions();
  const flatNavbar = useFlatNavbar();
  try {
    return useDocs(
      state =>
        state.documents[slug] ??
        (fallBackToFirst
          ? state.documents[Object.keys(state.documents)[0]]
          : undefined)
    );
  } catch (e) {
    fetchDocumentNowBySlug(rootPath, flatNavbar, slug);
    throw e;
  }
};
