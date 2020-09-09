import Fuse from 'fuse.js';
import { DocumentMap } from '../utils/document_interfaces';
import { dokumentStore } from '../store/docStore';

interface Result {
  slug: string;
  content: string;
}
const fuse = new Fuse<Result>([], {
  includeScore: true,
  keys: ['content'],
  minMatchCharLength: 3,
  ignoreLocation: true,
});

let docMap: DocumentMap;
dokumentStore.subscribe(model => {
  if (model.documentMap !== docMap) {
    docMap = model.documentMap;
    fuse.setCollection(
      Object.keys(docMap).flatMap(key => {
        const doc = docMap[key];
        console.log(doc);
        return doc.content.split(`\n`).map(content => {
          return {
            content,
            slug: doc.slug,
          };
        });
      })
    );
  }
});
export interface DocSearchResult {
  slug: string;
  score: number;
}

export function search(query: string): DocSearchResult[] {
  let results: { [key: string]: DocSearchResult } = {};
  return fuse.search(query).reduce((memo, result) => {
    let r =
      results[result.item.slug] ||
      ({ score: 0, slug: result.item.slug } as DocSearchResult);
    results[result.item.slug] = r;
    r.score += result.score;
    if (!memo.includes(r) && result.score < 0.6) {
      memo.push(r);
    }
    return memo;
  }, []);
}
