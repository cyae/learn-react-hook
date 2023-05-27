import "./App.css";
import React, { useState } from "react";

// 1. hooks can only be used inside a function, not a class
// 2. hooks must be called in the same order in component render,
// which means that hooks can not be inside if-condition, loop, etc.
function State() {
  // 3. STATE-HOOK HAS 2 WAYS OF CONSTRUCTING

  // #1 is passing plain value or function into constructor
  // will render init value for every state mutating
  // which, in some cases, will slow down rendering for complex function.
  const [count, setCount] = useState(4);

  // #2 is passing a caller function, init value will be rendered only once.
  const [count2, setCount2] = useState(() => {
    return 4;
  });

  function decrementCount() {
    // 4. INCORRECT WAY OF CHANGING STATE
    // below is just rewriting current state to a new state, no matter what the previous state is.
    // setCount(count - 1);

    // correct way of changing state
    // setState() should perform state mutating based on previous state
    setCount((previousCount) => previousCount - 1);
  }
  function incrementCount() {
    setCount((previousCount) => previousCount + 1);
  }

  // 5. for state of multiple attributes, state-hook woll not merge mutated attr with unchanged ones
  // another way to avoid this is to use multiple state-hooks for each attr
  const [objState, setObjState] = useState({
    attr1: 10,
    attr2: "ok",
  });

  function mutateObjState() {
    setObjState((prev) => {
      return {
        attr1: prev.attr1 + 1, // unchanged attr2 will be rewrite to null
      };
    });
  }

  function mutateObjStateAutoMerge() {
    setObjState((prev) => {
      return {
        ...prev, // spread previous state to merge mutated with unchanged attrs
        attr1: prev.attr1 + 1,
      };
    });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default State;
