import elasticlunr from 'elasticlunr';
import { DocumentData } from '../document_handling/document_provider';

const index: any = elasticlunr(function(this: any): void {
  this.addField('title');
  this.addField('content');
  this.setRef('id');
  this.saveDocument(true);
});

export function addDocumentToIndex(doc: DocumentData): void {
  index.addDoc({
    id: doc.slug,
    title: doc.title,
    content: doc.content,
  });
}

export interface DocSearchResult {
  slug: string;
  score: number;
}
export function search(query: string): DocSearchResult[] {
  return index
    .search(query, { title: { boost: 2 }, content: { boost: 1 } })
    .map((result: any) => {
      return {
        slug: result.ref,
        score: result.score,
      };
    });
}
