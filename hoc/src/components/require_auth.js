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

    const mapStateToProps = ({isLoggedIn}) =>{
        return {isLoggedIn}
    };

    return connect(mapStateToProps)(Auth);
};
