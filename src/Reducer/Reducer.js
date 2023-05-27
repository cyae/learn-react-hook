import React, { useReducer } from "react";

// reducer-hook provides us with a complex state handling mechanism

// ENUM of actions
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

// state dispatcher, these branches are same as handleXXX(){setXXX} when using state-hook
function reducer(curState, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: curState.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: curState.count - 1 };
    default:
      return curState;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }, null);

  //   we can only use dispatch to mutate state
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Reducer;
