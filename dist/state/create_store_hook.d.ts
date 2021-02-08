import { StoreApi } from "zustand/vanilla";
export declare const createStoreHook: <State extends Record<string | number | symbol, unknown>>(store: StoreApi<State>) => <Producer extends (state: State) => any>(producer: Producer) => ReturnType<Producer>;
