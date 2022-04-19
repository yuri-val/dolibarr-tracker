export const fromStore = (key, defValue = "") => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return defValue;
    return {
      ...defValue,
      ...JSON.parse(serializedState),
    };
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
