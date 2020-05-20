import React, { Component } from "react";
import UserContext from "../contexts/UserContext";
import "./UserLanguage.css";

export default class UserLanguage extends Component {
  static contextType = UserContext;

  render() {
    const { name, total_score } = this.props.language;

    const words = this.props.words;
    return (
      <div className="language">
        <div className="language-wrapper">
          <h2>Let's learn {name}, comrade!</h2>
          <p>
            <span>language:</span> {name}
          </p>
          <p>
            <span>hello</span> {this.context.user.name}!
          </p>
          <p>
            <span>you've scored:</span> {total_score}
          </p>
          <ul>words to learn:</ul>{" "}
          {words.map((word) => (
            <li key={word.id}>{word.original} </li>
          ))}
        </div>
      </div>
    );
  }
}
