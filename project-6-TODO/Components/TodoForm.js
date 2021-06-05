import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { ADD_TODO } from "../context/actions";
import TodoContext from "../context/TodoContext";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const { dispatch } = useContext(TodoContext);

  function saveTodo() {
    if (todoInput === "") {
      return alert("Please enter some value");
    }

    const todo = {
      todoInput: todoInput,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoInput("");
  }

  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <input
        type="text"
        placeholder="Enter Todo"
        name="todo"
        id="todo-id"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={saveTodo}>Save</button>
    </div>
  );
};

export default TodoForm;
