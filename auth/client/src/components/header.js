import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
    renderNavs() {
        if (this.props.auth) {
            return (
                <li className="nav-item">
                    <Link className="nav-link"
                          to="/signout">Sign Out</Link>
                </li>
            );
        } else {
            return [
                <li className="nav-item" key={0}>
                    <Link className="nav-link"
                          to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={1}>
                    <Link className="nav-link"
                          to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/"
                          className="navbar-brand">Redux Auth</Link>
                    <ul className="navbar-nav mr-auto">
                        {this.renderNavs()}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth: auth.authenticated };
};

export default connect(mapStateToProps)(Header);