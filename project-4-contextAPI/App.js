import React, { Fragment } from "react";
import Provider from "./provider";
import Grandchild from "./Grandchild";

const App = () => {
  return (
    <div>
      <h1 className="text-center">Context API</h1>
      <Provider>
        <Grandchild />
      </Provider>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import Grandchild from "./Grandchild";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const sendToChild = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Parent</h1>
//       <button onClick={sendToChild}>Send</button>
//       <Grandchild count={count} />
//     </div>
//   );
// };

// export default App;
