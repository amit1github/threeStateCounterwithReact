import React, { useReducer } from "react";
import "./style.css";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "RESET") {
    return state = initialState;
  }

  return state
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Container">
      <h1>An App for Three-Counter-State</h1>
      <h2>{state}</h2>
      
      <button onClick={() => dispatch({type: "RESET"})} className="button">Reset Counter</button>
      
      <button onClick={() => dispatch({type: "INCREMENT"})}  className="button">Increment Number</button> 

      <button onClick={() => dispatch({type: "DECREMENT"})} className="button">Decrement Number</button>
    
    </div>
  );
};

export default App;



// NOTE: Same project but with useState

// import React, { useState } from "react";
// import "./style.css";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="Container">
//       <h1>An App for Three-Counter-State</h1>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(0)} className="button" id="reset">Reset Counter</button>
//       <button onClick={() => (count >= 5 ? "" : setCount(count + 1))}  className="button" id="increment">Increment Number</button> 
//       <br/>
//       <button onClick={() => (count <= 1 ? "" : setCount(count - 1))} className="button" id="decrement">Decrement Number</button>
//     </div>
//   );
// };

// export default App;
