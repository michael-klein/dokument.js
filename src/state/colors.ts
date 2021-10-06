import create from "zustand/vanilla";
import { persist } from "zustand/middleware";

export type ColorsState = {
  "--color-base": string;
  "--color-base2": string;
  "--color-text": string;
  "--color-extra-light": string;
  setColor: (
    key: keyof Omit<ColorsState, "setColor" | "resetColors">,
    value: string
  ) => void;
  resetColors: () => void;
};
export const colors = create<ColorsState>(
  persist(
    (set, get) => ({
      "--color-base": get()?.["--color-base"] ?? "",
      "--color-base2": get?.["--color-base2"] ?? "",
      "--color-text": get?.["--color-text"] ?? "",
      "--color-extra-light": get?.["--color-extra-light"] ?? "",
      setColor: (
        key: keyof Omit<ColorsState, "setColor" | "resetColors">,
        value: string
      ) =>
        set({
          [key]: value,
        } as any),
      resetColors: () => {
        Object.keys(get()).forEach((key) => {
          if (key.startsWith("--")) {
            document.documentElement.style.removeProperty(key);
            set({
              [key]: getComputedStyle(
                document.documentElement
              ).getPropertyValue(key),
            } as any);
          }
        });
      },
    }),
    {
      name: "dokjs-colors-storage",
      getStorage: () => localStorage,
    }
  )
);

colors.subscribe((state) => {
  Object.keys(state).forEach((key) => {
    if (key.startsWith("--")) {
      document.documentElement.style.setProperty(key, state[key]);
    }
  });
});
