export declare const debounce: <T extends (...args: any[]) => any>(callback: T, waitFor: number) => (...args: Parameters<T>) => ReturnType<T>;
export declare const useDebounce: <T extends (...args: any[]) => any>(callback: T, waitFor: number) => (...args: Parameters<T>) => ReturnType<T>;
