import lunr, { Index } from "lunr";
import { DocumentData, DocumentMap } from "./document_interfaces";

let idx: Index;
let currentDocs: DocumentMap;
export interface SearchResultItem extends DocumentData {
  score: number;
}
export const searchDocs = (query: string): SearchResultItem[] => {
  return idx.search(query).map((result) => {
    return { ...currentDocs[result.ref], score: result.score };
  });
};
export const updateIndex = (docs: DocumentMap) => {
  if (docs) {
    currentDocs = docs;
    idx = lunr(function () {
      this.field("title");
      this.field("content");
      for (const doc of Object.values(docs)) {
        this.add({ id: doc.slug, title: doc.title, content: doc.content });
      }
    });
  }
};
