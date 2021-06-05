import React, { useState } from "react";
import Context from "./context";

const Provider = (props) => {
  const [person, setPerson] = useState({
    fname: "Deepak",
    lname: "Ranjan",
    age: 25,
  });

  return (
    <Context.Provider
      value={{
        data: person,
        changeAge: () => {
          setPerson({ ...person, age: 45 });
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
