import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginRoute.css";

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <div className="LoginRoute">
        <div className="login-wrapper">
          <section>
            <h2>Login</h2>
            <p>For demo, log in with:</p>
            <p>Username: testuser</p>
            <p>Password: Password123#</p>
            <LoginForm onLoginSuccess={this.handleLoginSuccess} />
          </section>
        </div>
      </div>
    );
  }
}

export default LoginRoute;
