import { StoreApi } from "zustand/vanilla";
import { useEffect, useRef, useState } from "preact/hooks";
import shallow from "zustand/shallow";

const MISSING = Symbol();
const produceResult = <
  State extends Record<string | number | symbol, unknown>,
  Producer extends (state: State) => any
>(
  store: StoreApi<State>,
  producer: Producer
) => {
  const { getState } = store;
  try {
    return producer(getState()) ?? MISSING;
  } catch (e) {
    return MISSING;
  }
};

export const createStoreHook = <
  State extends Record<string | number | symbol, unknown>
>(
  store: StoreApi<State>
) => {
  const useStore = <Producer extends (state: State) => any>(
    producer: Producer
  ): ReturnType<Producer> => {
    const [currentState, setCurrentState] = useState(() =>
      produceResult(store, producer)
    );
    let unsub;
    const promise = new Promise(resolve => {
      const result = produceResult(store, producer);
      if (result !== currentState) {
        setCurrentState(result);
      }
      unsub = store.subscribe(() => {
        const value = produceResult(store, producer);
        if (value !== currentState) {
          setCurrentState(value);
          resolve();
        }
      });
    });

    useEffect(() => () => unsub());

    if (currentState === MISSING) {
      throw promise;
    }

    return currentState;
  };
  return useStore;
};
