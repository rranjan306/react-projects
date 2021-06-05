import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>User Components</h1>
      <p>{id}</p>
    </div>
  );
};

export default User;
