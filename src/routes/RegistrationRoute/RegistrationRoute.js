import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationRoute.css";

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <div className="RegistrationRoute">
        <div className="reg-wrapper">
          <section>
            <p>
              Practice learning a language with the spaced reptition revision
              technique.
            </p>
            <h2>Sign up</h2>
            <p>For demo, log in with:</p>
            <p>Username: testuser</p>
            <p>Password: Password123#</p>
            <RegistrationForm
              onRegistrationSuccess={this.handleRegistrationSuccess}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default RegistrationRoute;
