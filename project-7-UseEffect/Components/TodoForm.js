import React, { useState } from "react";
import { v4 } from "uuid";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  function handleSubmit() {
    if (value === "") {
      return alert("oops! Empty todo is not allowed");
    }

    const todo = {
      title: value,
      id: v4(),
    };

    saveTodo(todo);
    setValue("");
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p>
        <input
          type="text"
          placeholder="Type your todo"
          id="todo"
          name="todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button style={{ cursor: "pointer" }} onClick={handleSubmit}>
          Add Todo
        </button>
      </p>
    </div>
  );
};

export default TodoForm;
