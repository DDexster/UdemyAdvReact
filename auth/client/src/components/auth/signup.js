import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";

class SignUp extends Component {
    handleFormSubmit({ email, password }) {
        this.props.signUpUser({ email, password, history: this.props.history });
    }

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Ooops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-control ${touched && error ? "is-invalid" : ""}`;
        return <div className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
                type={field.type}
                className={className}
                placeholder={`${field.label}...`}
                {...field.input}
            />
            <div className="invalid-feedback">
                {touched ? error : ""}
            </div>
        </div>;
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                  className="signup">
                <Field type="email"
                       name="email"
                       label="Email"
                       component={this.renderField} />
                <Field type="password"
                       name="password"
                       label="Password"
                       component={this.renderField} />
                <Field type="password"
                       name="confirm_password"
                       label="Confirm Password"
                       component={this.renderField} />
                {this.renderError()}
                <button action="submit"
                        className="btn btn-success">Sign Up
                </button>
            </form>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Please enter an email!";
    }
    if (!values.password) {
        errors.password = "Please enter password";
    }
    if (!values.confirm_password) {
        errors.confirm_password = "Please confirm password";
    }
    if (values.password !== values.confirm_password) {
        errors.password = "Passwords doesn't match!";
        errors.confirm_password = "Passwords doesn't match!";
    }

    return errors;
};

const formOptions = {
    form: "signup",
    validate
};

const mapStateToProps = state => {
    return { errorMessage: state.auth.error };
};


export default reduxForm(formOptions)(connect(mapStateToProps, actions)(SignUp));