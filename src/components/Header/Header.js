import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        {/* <span id="user-name">{this.context.user.name}</span> */}
        <nav id="header">
          <Link id="nav-link" onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link> <Link to="/register">Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <div className="nav">
        <header>
          <h1>
            <Link id="header" to="/">
              Welcome{" "}
            </Link>
            <span id="user-name">{this.context.user.name}!</span>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </header>
      </div>
    );
  }
}

export default Header;
