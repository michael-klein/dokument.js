import { h, Fragment, FunctionComponent, JSX } from "preact";
import { useDocument } from "../state/hooks/use_document";
import { useDocsOptions } from "../utils/docs_options_context";

import { htmdx } from "htmdx";
import { useCurrentDocument } from "../state/hooks/use_current_document";
import { useComponentList } from "../utils/component_list_context";
import { useFlatNavbar } from "../state/hooks/use_flat_navbar";
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

export function DocumentRenderer(): JSX.Element {
  const { TOC } = useComponentList();
  const currentDocument = useCurrentDocument();
  const { htmdxOptions = { components: {} } } = useDocsOptions();
  const navbarItems = useFlatNavbar();
  return (
    <>
      <article>
        {htmdx(currentDocument.content, h, {
          ...htmdxOptions,
          components: { ...components, ...htmdxOptions.components },
        })}
      </article>
      <TOC
        item={navbarItems.find((i) => i.slug === currentDocument.slug)}
      ></TOC>
    </>
  );
}
