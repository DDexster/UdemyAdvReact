import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";

class SignIn extends Component {
    handleFormSubmit({ email, password }) {
        this.props.signInUser({ email, password, history: this.props.history });
    }

    renderAlert(){
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Ooops!</strong> {this.props.errorMessage}
                </div>
            )
        }
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
                {this.renderAlert()}
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

const mapStateToProps = ({ auth }) => {
    return { errorMessage: auth.error };
};

export default reduxForm(formOptions)(connect(mapStateToProps, actions)(SignIn));