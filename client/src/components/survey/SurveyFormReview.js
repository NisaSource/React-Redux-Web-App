import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h3>Please confirm your entries</h3>
      {reviewFields}
      <button
        className="black darken-3 white-text btn-flat"
        onClick={onCancel}
        style={{ marginTop: "20px" }}
      >
        <i className="material-icons orange-text">arrow_back</i>
      </button>
      <button
        onClick={() =>
          submitSurvey(formValues).then(() => window.location.reload())
        }
        className="btn-floating btn-large orange pulse right"
        style={{ marginTop: "20px" }}
      >
        <i className="material-icons right black-text">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
