import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLogin } from "../actions/index";

class Header extends Component {
    authButton() {
        const auth = this.props.isLoggedIn;
        return (<button onClick={() => this.props.toggleLogin(!auth)}
                       className={`btn ${!auth ? "btn-primary" : "btn-warning" }`}>
            {!auth ? "Sign In" : "Sign Out"}
        </button>)
    }

    render() {
        return (
            <nav className="header navbar navbar-default">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resources">Resources</Link>
                        </li>
                        <li className="nav-item">
                            {this.authButton()}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ isLoggedIn }) => {
    return { isLoggedIn };
};

export default connect(mapStateToProps, { toggleLogin })(Header);