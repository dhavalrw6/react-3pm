import React from "react";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

function App() {
  const [text, setText] = useState("");

  const db = getDatabase(app);

  let handleClick = () => {
    set(ref(db, "todo/" + Date.now()), text);
  };

  return (
    <>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
