import React from "react";

function Counter(props) {
  return (
    <div>
      <h6>
        Question <span>{props.counter + 1}</span> of <span>{props.total}</span>
      </h6>
    </div>
  );
}

export default Counter;
