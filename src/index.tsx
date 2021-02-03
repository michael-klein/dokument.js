import { HtmdxOptions } from "htmdx";
import { render, h } from "preact";
import { docs, useDocs } from "./state/docs";
import "./theme/theme.scss";
import { fetchNavbar, qeueDocuments } from "./utils/document_provider";
import { componentList, ComponentList } from "./components/component_list";
import { componentListContext } from "./utils/component_list_context";
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
async function load(options: DocsOptions) {
  const navbar = await fetchNavbar(options.rootPath, options.navbarPath);
  await docs.getState().setNavBar(navbar);
  qeueDocuments(options.rootPath, navbar);
}

export const dokument = async (
  optionsIn: Partial<Omit<DocsOptions, "componentList">> = {}
): Promise<void> => {
  const newComponentList = { ...componentList };
  Object.keys(optionsIn?.componentListModifier ?? {}).forEach(key => {
    newComponentList[key] = optionsIn.componentListModifier[key](
      newComponentList[key]
    );
  });
  const options: DocsOptions = {
    rootPath: "./",
    title: "Documentation",
    container: document.body,
    htmdxOptions: { ...optionsIn.htmdxOptions },
    navbarPath: "",
    ...optionsIn
  };
  document.title = options.title;
  load(options);
  const { App } = newComponentList;
  const { Provider } = componentListContext;
  const start = () => {
    render(
      <Provider value={newComponentList}>
        <App />
      </Provider>,
      options.container
    );
  };
  if (document.readyState === "complete" || document.readyState !== "loading") {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
};
