//you got this right!

//you got this wrong

//the answers are wrong
import React, { Component } from "react";

export class Feedback extends Component {
  state = {
    ...this.props.state,
  };
  render() {
    return (
      <div className="feedback">
        <section>
          {!this.state.isCorrect} ?(
          <h3>oh no!</h3>
          <p>
            the correct answer is <span>{this.state.original}</span>
          </p>
          )
        </section>
      </div>
    );
  }
}
