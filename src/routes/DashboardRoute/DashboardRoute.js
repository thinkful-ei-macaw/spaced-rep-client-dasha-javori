import React, { Component } from "react";
import "./DashboardRoute.css";
import Header from "../../components/Header/Header";
import UserLanguage from "../../components/UserLanguage";
import languageService from "../../services/language-api-service";

class DashboardRoute extends Component {
  state = {
    language: [],
    words: [],
    nextWord: [],
  };

  componentDidMount() {
    console.log("componentDidMount dashboardRoute");
    languageService.getLanguage().then((data) => {
      this.setState(data);
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="DashboardRoute">
        <div className="Dashboard-wrapper">
          <Header />
          <UserLanguage
            language={this.state.language}
            words={this.state.words}
          />
        </div>
      </div>
    );
  }
}

export default DashboardRoute;
