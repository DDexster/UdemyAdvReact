import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SignIn extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                  className="signin">
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field type="email"
                           name="email"
                           component="input"
                           placeholder="Email..."
                           className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field type="password"
                           name="password"
                           component="input"
                           placeholder="Password..."
                           className="form-control" />
                </fieldset>
                <button action="submit"
                        className="btn btn-primary">Sign in
                </button>
            </form>
        );
    }
}

const formOptions = {
    form: "signin"
};

export default reduxForm(formOptions)(SignIn);