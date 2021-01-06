import { StoreApi } from "zustand/vanilla";
import { useEffect, useState } from "preact/hooks";
import shallow from "zustand/shallow";

export const createStoreHook = <
  State extends Record<string | number | symbol, unknown>
>(
  store: StoreApi<State>
) => {
  const useStore = <Producer extends (state: State) => any>(
    producer: Producer
  ): ReturnType<Producer> => {
    const { getState, subscribe } = store;
    const [currentState, setCurrentState] = useState(() =>
      producer(getState())
    );
    useEffect(() => subscribe(setCurrentState, producer, shallow), []);
    return currentState;
  };
  return useStore;
};
