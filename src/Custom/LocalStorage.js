import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));

    return () => {};
  }, [value]);

  return [value, setValue];
}
