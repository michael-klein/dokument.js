import { DocumentData } from '../utils/document_provider';
export interface SearchResultsItemProps {
    doc: DocumentData;
    searchQuery: string;
}
export declare function SearchResultsItem(props: SearchResultsItemProps): JSX.Element;
