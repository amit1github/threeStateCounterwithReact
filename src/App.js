import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Container">
      <h1>An App for Three-Counter-State</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(0)} className="button" id="reset">Reset Counter</button>
      <button onClick={() => (count >= 5 ? "" : setCount(count + 1))}  className="button" id="increment">Increment Number</button> 
      <br/>
      <button onClick={() => (count <= 1 ? "" : setCount(count - 1))} className="button" id="decrement">Decrement Number</button>
    </div>
  );
};

export default App;
