export interface DocSearchResult {
    slug: string;
    score: number;
}
export declare function search(query: string): DocSearchResult[];
