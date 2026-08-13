import React, { useState } from "react";

const ColorChanger = () => {

  // State for background color
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("gold");
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
      }}
    >
      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default ColorChanger;