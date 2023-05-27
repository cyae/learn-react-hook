import React, { useCallback, useState } from "react";
import List from "./List";

// callback-hook provides similar reference-caching as memo-hook
export default function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // everytime the component is rendered, this getItems() function is re-created as a new function
  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  // to achieve REFERENCE EQUALITY, we can use callback-hook same as memo-hook
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]); // only re-create getItems() when number mutates

  // memo-hook v.s. callback-hook
  // these two are very similar, with memo-hook returns the result (list of number in above case)
  // whereas callback-hook returns the function being wrapped by useCallback(), this allows callback-hook to pass additional params

  const theme = {
    background: dark ? "#333" : "#FFF",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      {/* which will trigger effect-hook in List */}
      <List getItems={getItems}></List>
    </div>
  );
}
