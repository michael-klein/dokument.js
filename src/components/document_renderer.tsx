import {
  h,
  Fragment,
  createContext,
  Context,
  FunctionComponent,
  JSX,
  isValidElement
} from "preact";
import { useEffect } from "preact/hooks";
import { useDocuments } from "../state/docs";
import { useDocsOptions } from "../utils/docs_options_context";

import { htmdx } from "htmdx";
const components: { [key: string]: FunctionComponent } = {};
/*
let hCount: number = 0;
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(heading => {
  const Component = (props: any): JSX.Element => {
    let check = props.children;
    if (check instanceof Array) {
      check = h("div", { children: props.children });
    }
    const text: string = isValidElement(check)
      ? innerText(check)
      : props.children;
    const heading = currentDocument.headings.find(heading =>
      text.toString().includes(heading.text)
    );
    return h(heading, {
      key: heading + hCount++,
      id: heading && heading.slug,
      children: [
        <>
          {heading ? (
            <Link to={`${heading.slug}`}>{heading.text}</Link>
          ) : (
            props.children
          )}
        </>
      ]
    });
  };
  components[heading] = Component;
});

*/

export interface DocumentRendererProps {
  slug: string;
}

export function DocumentRenderer(props: DocumentRendererProps): JSX.Element {
  const documents = useDocuments() ?? {};
  const currentDocument = documents[props.slug];
  const { htmdxOptions = { components: {} } } = useDocsOptions();
  console.log(currentDocument.content);
  return (
    <>
      <article>
        {htmdx(currentDocument.content, h, {
          ...htmdxOptions,
          components: { ...components, ...htmdxOptions.components }
        })}
      </article>
    </>
  );
}
