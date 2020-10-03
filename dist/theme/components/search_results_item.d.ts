/// <reference types="react" />
import { DocumentData } from '../../utils/document_interfaces';
export interface SearchResultsItemProps {
    doc: DocumentData;
    searchQuery: string;
}
export declare function SearchResultsItem(props: SearchResultsItemProps): JSX.Element;
