import { DocumentData } from '../document_handling/document_provider';
export declare function addDocumentToIndex(doc: DocumentData): void;
export interface DocSearchResult {
    slug: string;
    score: number;
}
export declare function search(query: string): DocSearchResult[];
