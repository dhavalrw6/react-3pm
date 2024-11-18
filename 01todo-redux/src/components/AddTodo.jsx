import React, { useState } from "react";
import { addTodo } from "../features/todos/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));

    setInput("");
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
