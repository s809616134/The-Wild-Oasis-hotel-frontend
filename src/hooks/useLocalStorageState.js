import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // if there is Value, set initial value to stored value
  // if not, set the value to initialState
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // when k-v changes, update k-v pair in localStorage
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
