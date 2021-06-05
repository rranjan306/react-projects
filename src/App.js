import React, { useState } from "react";
import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { Add } from "./action/action";

const App = () => {
  const [todo, setTodo] = useState("");

  const save = () => {
    if (todo === "") {
      return alert("Empty form is not allowed");
    }

    const todo = {
      title: todo,
      id: v4(),
    };

    Add(todo);

    setTodo("");
  };

  return (
    <div>
      <h1>FORM</h1>
      <input
        type="text"
        name="todo"
        id="todo_id"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
};

// data from state to components
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    Add: (data) => {
      dispatch(Add(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
