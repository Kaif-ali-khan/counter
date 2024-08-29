import React from "react";
import "./Practice.css";
import { useState } from "react";

const Practice = (props) => {
  const [number, setnumber] = useState(0);
  return (
    <div>
      <h1>
        {props.text}
        {number}
      </h1>
      <button
        className="btn"
        onClick={() => {
          setnumber(number + 1);
        }}
      >
        Increase
      </button>
      <button
        className="btn"
        onClick={() => {
          setnumber(number - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Practice;
