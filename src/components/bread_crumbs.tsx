import { h, Fragment } from "preact";
import Match from "preact-router/match";
import { useCurrentDocument } from "../state/hooks/use_current_document";
import { useDocsOptions } from "../utils/docs_options_context";
import { join } from "../utils/file_utils";

export const BreadCrumbs = () => {
  const document = useCurrentDocument();
  const { rootPath } = useDocsOptions();
  return (
    <Match path="">
      {({}) => {
        let sawMD = false;
        return (
          <div className="bread-crumb">
            <svg
              className="bread-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {join(rootPath, document?.path ?? "")
              .split("/")
              .filter(p => {
                if (sawMD) {
                  return false;
                }
                if (p.includes(".md")) {
                  sawMD = true;
                }
                return p.length > 0 && p !== "#";
              })
              .map(part => {
                return <span key={part}>{part}</span>;
              })}
          </div>
        );
      }}
    </Match>
  );
};
