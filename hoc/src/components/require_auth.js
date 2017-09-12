import React from "react";

export default function (ComposedComponent) {
    class Auth extends React.Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    return Auth;
};