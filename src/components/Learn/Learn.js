import React, { Component } from "react";
import Header from "../Header/Header";
import languageService from "../../services/language-api-service";

export class Learn extends Component {
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
    console.log(this.nextWord);

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
          <form
            onSubmit={(e) => this.handleGuess(e)}
            input="text"
            id="guess-input"
            name="guess-input"
            required
            onChange={this.setGuess}
          >
            <label htmlFor="learn-guess-input">
              What's the translation for this word?
            </label>

            <button type="submit">Submit your answer</button>
          </form>
        </section>

        <p>You have answered this word correctly {wordCorrectCount} times.</p>
        <p>
          You have answered this word incorrectly {wordIncorrectCount} times.
        </p>
      </div>
    );
  }
}
export default Learn;
