import React, { Component } from "react";

import Quiz from "./layout/Quiz";
import Result from "./layout/Result";

import Data from "./data/Data";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      counter: 0,
      anwser: "",
      isCorrect: false,
      isDone: false,
      result: 0,
      tries: 0
    };
    this.handleIsCorrect = this.handleIsCorrect.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.handleAnwserHighlight = this.handleAnwserHighlight.bind(this);
    this.clearAnwserHighlight = this.clearAnwserHighlight.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: Data[0].question,
      anwser: Data[0].anwsers,
      counter: 0,
      isCorrect: false,
      isDone: false,
      result: 0,
      tries: 0
    });
  }

  handleIsCorrect = (event, correct) => {
    const { tries } = this.state;
    const prevState = correct;
    event.persist();

    this.setState({ isCorrect: prevState, tries: tries + 1 }, () => {
      if (this.state.isCorrect) {
        this.handleAnwserHighlight(event);

        setTimeout(() => {
          this.clearAnwserHighlight();

          this.nextStep();
        }, 1000);
      } else {
        this.handleAnwserHighlight(event);
      }
    });
  };

  handleAnwserHighlight(event) {
    if (this.state.isCorrect && event.target.nodeName === "LI") {
      event.target.classList.add("anwser-correct");
    } else if (!this.state.isCorrect && event.target.nodeName === "LI") {
      event.target.classList.add("anwser-incorrect");
    }
  }

  clearAnwserHighlight() {
    var getElems = document.getElementsByClassName("anwsers");
    for (var i = 0; i < getElems.length; ++i) {
      document
        .getElementsByClassName("anwsers")
        [i].classList.remove("anwser-incorrect", "anwser-correct");

      document.getElementsByClassName("anwsers")[i].removeAttribute("animation");
    }
  }

  nextStep() {
    const { counter, result } = this.state;
    const isCorrectLocal = this.state.isCorrect;
    console.log("iscorrect", isCorrectLocal);
    const localCounter = counter + 1;
    if (localCounter < Data.length) {
      this.setState({
        question: Data[localCounter].question,
        anwser: Data[localCounter].anwsers,
        counter: localCounter,
        result: result + 1,
        isDone: false
      });
    } else {
      this.setState({
        question: "done",
        result: result + 1,
        isDone: true
      });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        question={this.state.question}
        counter={this.state.counter}
        anwser={this.state.anwser}
        handleIsCorrect={this.handleIsCorrect}
        test={this.test}
      />
    );
  }

  renderResult() {
    return <Result result={this.state.result} tries={this.state.tries} />;
  }

  render() {
    return (
      <div id="container">
        <div>{this.state.isDone ? this.renderResult() : this.renderQuiz()}</div>
      </div>
    );
  }
}

export default Layout;
