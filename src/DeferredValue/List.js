import React, { useDeferredValue, useMemo } from "react";

// deferredvalue-hook works same goal as transition: improve responsivity, but in a different way
// deferredvalue-hook still keeps the priority, but makes the render interval wider
// in essence, this hook skip some renders.
export default function List({ input }) {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const newList = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      newList.push(<div key={i}>{deferredInput}</div>);
    }

    return newList;
  }, [deferredInput]);

  return list;
}
