import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>Count App using State</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>count +</button>
      <button onClick={() => (count === 0 ? "" : setCount(count - 1))}>
        count -
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
