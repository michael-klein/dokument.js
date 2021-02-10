import { StoreApi } from "zustand/vanilla";
import { useEffect, useState } from "preact/hooks";

const isEmptyObject = (obj: any): boolean =>
  obj &&
  obj instanceof Object &&
  Object.keys(obj).length === 0 &&
  obj.constructor === Object;

const isEmptyArray = (obj: any): boolean =>
  obj && obj instanceof Array && obj.length === 0;

const EMPTY_OBJECT = {};
const EMPTY_ARRAY = [];

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
    const result = producer(getState());
    if (result) {
      if (isEmptyObject(result)) {
        return EMPTY_OBJECT;
      }
      if (isEmptyArray(result)) {
        return EMPTY_ARRAY;
      }

      return result;
    } else {
      return MISSING;
    }
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
          resolve(undefined);
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
