import "./theme/theme.scss";
import { DocsOptions } from "./utils/docs_options_context";
export declare const dokument: (optionsIn?: Partial<Omit<DocsOptions, "componentList">>) => Promise<void>;
