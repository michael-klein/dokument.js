import { createContext } from "preact";
import { useContext } from "preact/hooks";
import { DocumentData } from "./document_interfaces";
export const currentDocumentContext = createContext<DocumentData>(undefined);
export const useCurrentDocument = () => useContext(currentDocumentContext);
