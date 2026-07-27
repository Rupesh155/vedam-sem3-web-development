import React, { useState } from "react";
import Child from "./Child";

const StateExample = () => {

  // Normal variable
  // Value changes, but UI does not re-render
  // let count = 0;

  // const increase = () => {
  //   count = count + 1;
  //   console.log(count);
  // };


  // State variable
  // count = current value
  // setCount = function to update the state
  // 0 = initial value
  const [count, setCount] = useState(0);


  const increase = () => {
    // Updating state causes a re-render
    setCount(count + 1);
  };


  return (
    <div>

      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Add
      </button>

      {/* Passing data from Parent to Child */}
      <Child count={count} />

    </div>
  );
};

export default StateExample;