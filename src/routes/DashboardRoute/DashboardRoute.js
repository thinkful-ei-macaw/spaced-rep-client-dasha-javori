import React, { Component } from "react";
import "./DashboardRoute.css";
import Header from "../../components/Header/Header";
import UserLanguage from "../../components/UserLanguage";
import languageService from "../../services/language-api-service";

import { Link } from "react-router-dom";

class DashboardRoute extends Component {
  state = {
    language: [],
    words: [],
  };

  componentDidMount() {
    languageService.getLanguage().then((data) => {
      this.setState(data);
    });
  }
  render() {
    return (
      <div className="DashboardRoute">
        <div className="Dashboard-wrapper">
          <section>
            <Header />
          </section>
          <UserLanguage
            language={this.state.language}
            words={this.state.words}
          />
          <Link to="/learn">
            <button type="button">start</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DashboardRoute;
