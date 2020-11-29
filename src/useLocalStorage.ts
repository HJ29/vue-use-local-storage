import { watch } from "vue";

function set(key: string, state: any) {
  localStorage.setItem(key, JSON.stringify(state));
}

function get(key: string) {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      return undefined;
    }
  }
  return undefined;
}

export default function useLocalStorage<T>(
  storeState: T,
  namespace: string,
  whitelist?: string[]
) {
  let rehydrateCallback: (state: T) => void;

  const keys = whitelist ? whitelist : Object.keys(storeState);

  function listen() {
    keys.forEach(key => {
      watch(
        () => (storeState as any)[key],
        v => {
          persistStorage(`${namespace}.${key}`, v);
        },
        { deep: true }
      );
    });
  }
  function persistStorage(key: string, storeState: T) {
    set(key, storeState);
  }
  function rehydrate() {
    keys.forEach(key => {
      const data = get(`${namespace}.${key}`);
      if (data !== undefined) {
        (storeState as any)[key] = data;
      }
    });
    if (rehydrateCallback !== undefined) {
      rehydrateCallback(storeState);
    }
    return Storage;
  }
  function onRehydrate(callback: (storeState: T) => void) {
    rehydrateCallback = () => callback(storeState);
    rehydrate();
    return Storage;
  }

  rehydrate();
  listen();

  const Storage = {
    onRehydrate
  };

  return Storage;
}
