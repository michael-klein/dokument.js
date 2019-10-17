import * as React from 'react';
import { DocumentData } from '../document_handling/document_provider';
export interface MDXContext {
    currentDocument?: DocumentData;
}
export declare const mdxContext: React.Context<MDXContext>;
export declare function DocumentRenderer(props: {
    slug: string;
    headingSlug: string;
}): JSX.Element;
