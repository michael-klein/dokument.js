import { dokument } from "./dist/dokumentjs.es.js";
if (window.location.hash.length === 0) {
  window.location.hash = "#/documents/intro.mdx";
}
dokument({
  navbarPath: "/",
  rootPath: "documents/"
});
