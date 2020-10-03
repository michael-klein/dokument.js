/// <reference types="react" />
import { DocumentData } from '../../utils/document_interfaces';
export interface PreviousAndNextProps {
    previous?: DocumentData;
    next?: DocumentData;
}
export declare function PreviousAndNext(props: PreviousAndNextProps): JSX.Element;
