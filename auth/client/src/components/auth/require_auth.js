import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function (ComposedComponent) {
    class Auth extends React.Component {
        render() {
            if (!this.props.isLoggedIn) {
                return <Redirect push to='/'/>
            }
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = ({auth}) =>{
        return {isLoggedIn: auth.authenticated}
    };

    return connect(mapStateToProps)(Auth);
};
