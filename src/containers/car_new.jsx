import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { createCar } from '../actions';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {}

  if (!values.plate) {
    errors.plate = 'Required'
  }

  if (!values.brand) {
    errors.brand = 'Required'
  }

  if (!values.model) {
    errors.model = 'Required'
  }

  if (!values.owner) {
    errors.owner = 'Required'
  }

  if (!/^[A-Z]+$/.test(values.plate)) {
    errors.plate = 'should be all caps and no special characters'
  }
  return errors
}

class CarNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          className="form-control"
          type={type}
          {...input}
        />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    );
  }

  render() {
    return (

      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Create Car
          </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'newPostForm', validate })(
  connect(null, { createCar })(CarNew)
);
