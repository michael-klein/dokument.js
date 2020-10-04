import * as React from 'react';
import { DocumentData } from '../../../utils/document_interfaces';
export interface MDXContext {
    currentDocument?: DocumentData;
}
export declare const mdxContext: React.Context<MDXContext>;
export interface DocumentRendererProps {
    slug: string;
    headingSlug: string;
}
export declare function DocumentRenderer(props: DocumentRendererProps): JSX.Element;
