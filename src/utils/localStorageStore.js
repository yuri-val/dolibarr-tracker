import get from "lodash/get";

const STORE_KEYS = ["DOLAPIKEY", "HOST"];

export const fromStoreByKey = (key, path, defValue = null) => {
  const value = fromStore(key, {});
  return get(value, path, defValue);
};

export const fromStore = (key, defValue = "") => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return defValue;
    return JSON.parse(serializedState);
  } catch (err) {
    return defValue;
  }
};

export const toStore = (key, value = "") => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    return undefined;
  }
};

const select = (state, key) => JSON.stringify(get(state, key));

export const withLocalStorage = (store) => {
  const { getState } = store;
  const { localStorage } = window;

  const handler = () => {
    STORE_KEYS.forEach((key) => {
      const value = select(getState(), key);
      localStorage.setItem(key, value);
    });
  };

  store.subscribe(handler);

  return store;
};
