import React, { Component } from "react";
import Header from "../Header/Header";
import languageService from "../../services/language-api-service";
import "./Learn.css";

export class Learn extends Component {
  componentDidMount() {
    languageService.getWords().then((data) => {
      this.setState(data);
      this.setState({ changeState: true });
    });
  }
  //had to comment it out because it reloads constantly on login
  // componentDidUpdate() {
  //   languageService.getWords().then((data) => {
  //     this.setState(data);
  //     this.setState({ changeState: false });
  //   });
  // }

  state = {
    nextWord: "",
    totalScore: 0,
    wordCorrectCount: "0",
    wordIncorrectCount: "0",
    guess: "",
    answered: false,
    response: null,
    feedback: "",
    translation: "",
    changeState: false,
  };

  // clearInput = () => {
  //   document.getElementById("guess-input").reset();
  // };

  setGuess = (e) => {
    this.setState({
      guess: e.target.value,
    });
  };

  handleGuess = (e) => {
    e.preventDefault();
    return languageService
      .getGuess(this.state.guess)
      .then((res) => {
        this.setState({
          response: res,
          answered: true,
        });
        e.target["guess-input"].value = "";
      })
      .catch((err) => {
        console.log("got err: ", e);
      });
  };
  setFeedback = (e) => {
    e.preventDefault();
    return languageService.getGuess(this.state.guess).then((res) => {
      if (res.isCorrect) {
        this.setState({
          response: res,
          feedback: "You got it right!",
          totalScore: res.totalScore,
          nextWord: res.nextWord,
          wordCorrectCount: res.wordCorrectCount,
          wordIncorrectCount: res.wordIncorrectCount,
        });
      } else
        this.setState({
          response: res,
          feedback: `You got it wrong! :( the right answer is '${res.answer}'`,
          totalScore: res.totalScore,
          nextWord: res.nextWord,
          wordCorrectCount: res.wordCorrectCount,
          wordIncorrectCount: res.wordIncorrectCount,
        });
    });
  };

  render() {
    const {
      nextWord,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
      feedback,
    } = this.state;
    return (
      <div className="learn">
        <Header />
        <section>
          <h3>What does this mean:</h3>
          <span>{nextWord}</span>
          <p>Your total score is: {totalScore}</p>
          <form
            id="space-form"
            name="space-form"
            onSubmit={((e) => this.handleGuess(e), (e) => this.setFeedback(e))}
          >
            <label htmlFor="learn-guess-input" id="input">
              your answer:{" "}
            </label>
            <input
              type="text"
              id="guess-input"
              name="guess-input"
              required
              onChange={this.setGuess}
            />
            <br />
            <button type="reset" id="reset" defaultValue="Reset">
              clear
            </button>
            <button type="submit">Submit</button>
          </form>
        </section>
        <h4>{feedback}</h4>
        <p>you got this word right {wordCorrectCount} times.</p>
        <p>you got this word wrong {wordIncorrectCount} times.</p>
      </div>
    );
  }
}
export default Learn;
