import React, { Component } from "react";
import Header from "../Header/Header";
import languageService from "../../services/language-api-service";
import "./Learn.css";

export class Learn extends Component {
  componentDidMount() {
    console.log("componentDidMount learn");
    languageService.getWords().then((data) => {
      this.setState(data);
    });
  }

  state = {
    nextWord: "",
    totalScore: 0,
    wordCorrectCount: "0",
    wordIncorrectCount: "0",
    guess: "",
    answered: false,
    response: null,
  };

  setGuess = (e) => {
    this.setState({
      guess: e.target.value,
    });
  };

  handleGuess = (e) => {
    e.preventDefault();
    return languageService.guessWord(this.state.guess).then((res) => {
      this.setState({
        response: res,
        answered: true,
      });
    });
  };

  render() {
    console.log(this.state);

    const {
      nextWord,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
    } = this.state;

    return (
      <div className="learn">
        <Header />
        <section>
          <h3>What does this mean:</h3>
          <span>{nextWord}</span>
          <p>Your total score is: {totalScore}</p>
          <form onSubmit={(e) => this.handleGuess(e)}>
            <label htmlFor="learn-guess-input" id="input">
              your answer:{" "}
            </label>
            <input
              type="text"
              id="guess-input"
              name="guess-input"
              required
              onChange={this.setGuess}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </section>

        <p>you got this word right {wordCorrectCount} times.</p>
        <p>you got this word wrong {wordIncorrectCount} times.</p>
      </div>
    );
  }
}
export default Learn;
