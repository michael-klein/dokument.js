export declare function join(...args: string[]): string;
export declare function getFile(filePath: string): Promise<string>;
export declare function getJSON<T extends Object = JSON>(filePath: string): Promise<T>;
