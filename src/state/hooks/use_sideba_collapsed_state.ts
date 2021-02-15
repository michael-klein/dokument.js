import { createStoreHook } from "../create_store_hook";
import { sidebarCollapsedState } from "../sidebar_collapsed_state";

export const useSidebarCollapsedState = createStoreHook(sidebarCollapsedState);
