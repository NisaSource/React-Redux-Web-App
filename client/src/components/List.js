import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./survey/surveyList";

const List = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
      <div className="fixed-action-btn">
        <Link to="/surveys" className="btn-floating btn-large orange">
          <i className="material-icons black-text">add</i>
        </Link>
      </div>
    </div>
  );
};

export default List;
