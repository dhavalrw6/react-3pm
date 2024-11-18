import React, { useMemo, useState } from "react";
import Child from "./components/Child";

function App() {
  let [count, setCount] = useState(0);
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  console.log("Parent component render..");

  let sum = useMemo(() => {
    console.log("render sum  function");
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div>
      <h2>Parent Comopent</h2>

      <input
        type="number"
        onChange={() => setNum1((prev) => prev + 1)}
        name=""
        id=""
      />
      <input
        type="number"
        onChange={() => setNum2((prev) => prev + 1)}
        name=""
        id=""
      />

      <h3>count:{count}</h3>
      <h3>sum: {sum}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>count++</button>
      <Child />
    </div>
  );
}

export default App;
