import { DocumentData } from "../../utils/document_interfaces";
import { useDocs } from "./use_docs";
export const useCurrentDocument = () => {
  return useDocs(state => state.currentDocument ?? {}) as DocumentData;
};
