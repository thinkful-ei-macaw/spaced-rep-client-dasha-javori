import React, { Component } from "react";
import "./DashboardRoute.css";
import Header from "../../components/Header/Header";

class DashboardRoute extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard-wrapper">
          <section>
            <Header />
            <h1>Let's learn Russian, comrade!</h1>{" "}
          </section>
        </div>
      </div>
    );
  }
}

export default DashboardRoute;
