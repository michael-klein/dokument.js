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
    const { getState } = store;
    const [currentState, setCurrentState] = useState(() =>
      producer(getState())
    );
    useEffect(() => {
      console.log(store);
      const { subscribe } = store;
      return subscribe(setCurrentState, producer, shallow);
    }, [store]);
    return currentState;
  };
  return useStore;
};
