import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Create your survey!</h3>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link
            to="/surveys"
            className="red btn-floating btn-large scale-transition"
            onClick={refreshPage}
          >
            <i className="large material-icons black-text">cancel</i>
          </Link>
          <button
            type="submit"
            className="btn-floating btn-large orange pulse right"
          >
            <i className="material-icons black-text">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}
function refreshPage() {
  window.location.reload();
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Please input correct value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
