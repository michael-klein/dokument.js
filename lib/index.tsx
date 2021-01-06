import { HtmdxOptions } from "htmdx";
import { render, h } from "preact";
import { docs, useDocs } from "./state/docs";
import { fetchNavbar, qeueDocuments } from "./utils/document_provider";
import { Sidebar } from "./sidebar";
export interface DocsOptions {
  rootPath: string;
  navbarPath: string;
  htmdxOptions: HtmdxOptions;
  title?: string;
  scrollContainerSelector?: string;
  container?: HTMLElement;
}

async function load(options: DocsOptions) {
  const navbar = await fetchNavbar(options.rootPath, options.navbarPath);
  await docs.getState().setNavBar(navbar);
  qeueDocuments(options.rootPath, navbar);
}

const Test = () => {
  const docState = useDocs(state => state);
  console.log(docState);
  return <Sidebar></Sidebar>;
};

export const dokument = async (
  optionsIn: Partial<Omit<DocsOptions, "componentList">> = {}
): Promise<void> => {
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
  const start = () => {
    render(<Test />, options.container);
  };
  if (document.readyState === "complete" || document.readyState !== "loading") {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
};
