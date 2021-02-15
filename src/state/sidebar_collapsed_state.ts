import create from "zustand/vanilla";
import { persist } from "zustand/middleware";

export type SidebarCollapsedState = {
  isCollapsed?: { [key: string]: boolean };
  setCollapsed(path: string, producer: (current: boolean) => boolean): void;
};
export const sidebarCollapsedState = create<SidebarCollapsedState>(
  persist(
    (set, get) => ({
      isCollapsed: get()?.isCollapsed ?? {},
      setCollapsed: (path: string, producer: (current: boolean) => boolean) =>
        set({
          isCollapsed: {
            [path]: producer(get()?.isCollapsed[path])
          }
        })
    }),
    {
      name: "dokjs-collapsed-state",
      getStorage: () => localStorage
    }
  )
);
