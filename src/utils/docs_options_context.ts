import { HtmdxOptions } from "htmdx";
import { createContext } from "preact";
import { useContext } from "preact/hooks";
import { ComponentList, componentList } from "../components/component_list";
export interface DocsOptions {
  rootPath: string;
  navbarPath: string;
  htmdxOptions: HtmdxOptions;
  title?: string;
  scrollContainerSelector?: string;
  container?: HTMLElement;
  componentListModifier?: {
    [key in keyof ComponentList]?: (
      OriginalComponent: ComponentList[key]
    ) => ComponentList[key];
  };
}
export const docsOptionsContext = createContext<DocsOptions>(undefined);

export const useDocsOptions = () => useContext(docsOptionsContext);
