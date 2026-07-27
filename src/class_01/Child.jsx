import React from "react";

const Child = (props) => {

  // Receiving data through props
  return (
    <div>
      <h2>Count in Child: {props.count}</h2>
    </div>
  );
};

export default Child;