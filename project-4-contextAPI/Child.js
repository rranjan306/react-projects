import React from "react";
import Context from "./context";

const Child = () => {
  return (
    <div>
      <h2>Child</h2>
      <Context.Consumer>
        {(context) => {
          return (
            <div>
              <h1>Person Info</h1>
              <p>First Name: {context.data.fname}</p>
              <p>Last Name: {context.data.lname}</p>
              <p>Age: {context.data.age}</p>
              <button onClick={context.changeAge}>Change Age</button>
            </div>
          );
        }}
      </Context.Consumer>
    </div>
  );
};

export default Child;
