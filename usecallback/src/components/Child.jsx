import React, { memo } from "react";

function Child({ increment }) {
  
  console.log("child render....");

  return (
    <div>
      <button onClick={increment}>count++</button>
    </div>
  );
}

export default memo(Child);
