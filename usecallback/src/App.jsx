import React, { useCallback, useState } from "react";
import Child from "./components/Child";

function App() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  let increment = useCallback(() => {
    console.log("increment function call...");
    setCount(count + 1);
  }, [count]);

  console.log("Parent render....");

  return (
    <div>
      <h2>
        count:{count} count1:{count1}
      </h2>
      <button onClick={() => setCount1(count1 + 1)}>count++</button>
      <Child increment={increment} />
    </div>
  );
}

export default App;
