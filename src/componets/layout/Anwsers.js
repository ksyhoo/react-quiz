import React from "react";

function Anwsers(props) {
  const Anwser = props.anwser;
  const getAnswser = Anwser.map((Anwser, key) => (
    <li
      className="anwsers"
      key={key}
      onClick={event => {
        props.handleIsCorrect(event, Anwser.isCorrect);
      }}
    >
      {" "}
      {Anwser.content}{" "}
    </li>
  ));
  return (
    <div>
      <ul className="anwser"> {getAnswser}</ul>
    </div>
  );
}

export default Anwsers;
