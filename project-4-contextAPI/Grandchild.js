import React from "react";
import Child from "./Child";

const Grandchild = () => {
  return (
    <div>
      <Child />
      <h2>Grandchild</h2>
    </div>
  );
};

export default Grandchild;
