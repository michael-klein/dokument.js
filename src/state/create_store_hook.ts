import { StoreApi, Subscribe } from "zustand/vanilla";
import { useEffect, useRef, useState } from "preact/hooks";

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
    if (result !== undefined) {
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
const compare = (result1: any, result2: any) => {
  if (result1 !== result2) {
    if (result1 instanceof Array && result2 instanceof Array) {
      if (result1.length === result2.length) {
        return !result1.find((value, index) => !compare(result2[index], value));
      }
    }
    return false;
  }
  return true;
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
      if (!compare(result, currentState)) {
        setCurrentState(result);
      }
      unsub = store.subscribe(() => {
        const value = produceResult(store, producer);
        if (!compare(value, currentState)) {
          setCurrentState(value);
          resolve(undefined);
          unsub();
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
