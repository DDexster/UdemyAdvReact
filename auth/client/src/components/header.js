import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/"
                          className="navbar-brand">Redux Auth</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link"
                                  to="/signin">Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                  to="/signup">Sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;