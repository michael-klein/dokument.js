import { render, h } from "preact";
import { docs } from "./state/docs";
import "./theme/theme.scss";
import { fetchNavbar, queueDocuments } from "./utils/document_provider";
import { componentList, ComponentList } from "./components/component_list";
import { componentListContext } from "./utils/component_list_context";
import { docsOptionsContext, DocsOptions } from "./utils/docs_options_context";

async function load(options: DocsOptions) {
  const navbar = await fetchNavbar(options.rootPath, options.navbarPath);
  await docs.getState().setNavBar(navbar);
  queueDocuments(options.rootPath, navbar);
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
  const { Provider: DocsOptionsProvider } = docsOptionsContext;
  const start = () => {
    render(
      <DocsOptionsProvider value={options}>
        <Provider value={newComponentList}>
          <App />
        </Provider>
      </DocsOptionsProvider>,
      options.container
    );
  };
  if (document.readyState === "complete" || document.readyState !== "loading") {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
};
