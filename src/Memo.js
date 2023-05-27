import { useState, useMemo, useEffect } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // every state mutation will rerender the entire component, which calls slowFunction
  // const doubleNumber = slowFunction(number);

  // 1. MEMO-HOOK is like a cache that store the previous-computed value only for watched state-mutation
  // notice that: memo-hook will be called whenever state changes, even if the changing state is not in the watching list
  // memo-hook also induce memory cost
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); // only run slowFunction when number state mutates, in this case, leave dark state alone

  //  2. REFERENTIAL EQUATION
  // in js, different objs has different references(pointers) pointing to them, even if their attrs are equal
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  useEffect(() => {
    // This will be triggered each time the Memo component is rendered and themeStyles changes
    // including being triggered by the other state-mutation like number & dark above
    // Since themeStyles is an obj, each time the Memo component is rendered
    // , the component create an themeStyles with exact same attrs, but with different reference pointing to it
    // , so triggering effect-hook.
    console.log("Theme changed");
  }, [themeStyles]);

  // To avoid effect-hook being triggered by the different reference pointing to exact same-valued obj
  // we can use memo-hook to cache the reference
  const themeStylesLinkingToDark = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]); // only create new reference when dark changes, i.e. leave number mutations alone.

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevColor) => !prevColor)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

function slowFunction(number) {
  for (let i = 0; i < 1000000000; i++) {}

  return number * 2;
}

export default Memo;
