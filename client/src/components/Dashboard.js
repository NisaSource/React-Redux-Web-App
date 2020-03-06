import React, { Fragment } from "react";
import SurveyNew from "./survey/SurveyNew";
import { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <SurveyNew />
      </Fragment>
    );
  }
}

export default Dashboard;
