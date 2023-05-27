import React, { useDebugValue, useEffect, useState } from "react";

function getSavedValue(key, initialiValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    return savedValue;
  }

  if (initialiValue instanceof Function) {
    return initialiValue();
  }

  return initialiValue;
}

// custom-hook starts with use-
export default function useLocalStorage(key, initialiValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialiValue);
  });

  // real-time state tracer using debugValue-hook
  // this hook ONLY takes effect in custom-hook
  // and should be REMOVED in production
  useDebugValue(value);

  // or use function for only when inspecting traced state in broswer
  useDebugValue(value, val => slowFunction(val));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));

    return () => {};
  }, [value]);

  return [value, setValue];
}

function slowFunction(val) {
  for (let i = 0; i < 300000000; i++) {}
  return val;
}
