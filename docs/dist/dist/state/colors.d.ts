export declare type ColorsState = {
    "--color-base": string;
    "--color-base2": string;
    "--color-text": string;
    "--color-extra-light": string;
    setColor: (key: keyof Omit<ColorsState, "setColor" | "resetColors">, value: string) => void;
    resetColors: () => void;
};
export declare const colors: import("zustand/vanilla").StoreApi<ColorsState>;
