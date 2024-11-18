import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

function Counter() {
  const initialValue = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(useReducer(reducer, initialValue));

  return (
    <>
      <h2>Count {state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default Counter;
