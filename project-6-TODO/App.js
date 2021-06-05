import React, { useReducer } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Reducer from "./context/reducer";
import TodoContext from "./context/TodoContext";

const App = () => {
  const [todos, dispatch] = useReducer(Reducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <h1 style={{ textAlign: "center" }}>Todo App With Context API</h1>
      <TodoList />
      <TodoForm />
    </TodoContext.Provider>
  );
};

export default App;
