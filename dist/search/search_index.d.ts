import { DocumentData } from '../utils/document_interfaces';
export declare function addDocumentToIndex(doc: DocumentData): void;
export interface DocSearchResult {
    slug: string;
    score: number;
}
export declare function search(query: string): DocSearchResult[];
