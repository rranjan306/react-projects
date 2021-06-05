import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { REMOVE_TODO } from "../context/actions";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => {
        <p key={todo.id}>{todo.todoInput}</p>;
      })}
    </ul>
  );
};

export default TodoList;
