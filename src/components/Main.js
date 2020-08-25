import React, { useState } from "react";
import axios from "axios";

export default function Main() {
  const [result, setResult] = useState(null);
  const clickHandler = (e) => {
    setResult("result");
  };
  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          clickHandler(e);
        }}
      >
        Get data
      </button>
      <div id="res">{result === null ? " " : result}</div>
    </div>
  );
}
