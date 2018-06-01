import React from "react";
import Question from "./Question";
import Counter from "./Counter";
import Data from "../data/Data";
import Anwsers from "./Anwsers";

function Quiz(props) {
  return (
    <div>
      <Question question={props.question} />
      <Counter counter={props.counter} total={Data.length} />
      <Anwsers anwser={props.anwser} handleIsCorrect={props.handleIsCorrect} />
    </div>
  );
}

export default Quiz;
