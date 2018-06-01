import React from "react";

function Result(props) {
  return (
    <div>
      <h1 className="result">
        {" "}
        You anwsered {props.result} questions correctly in {props.tries} tries
      </h1>
    </div>
  );
}

export default Result;
