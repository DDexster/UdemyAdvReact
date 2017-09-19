import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import auth from "./components/auth/require_auth";

import Header from "./components/header";
import Welcome from "./components/welcome";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import SignOut from "./components/auth/signout";
import Feature from "./components/feature";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/signin"
                           component={SignIn} />
                    <Route path="/signup"
                           component={SignUp} />
                    <Route path="/signout"
                           component={SignOut} />
                    <Route path="/feature"
                           component={auth(Feature)} />
                    <Route path="/"
                           component={Welcome} />
                </Switch>
            </div>
        );
    }
}

export default App;
