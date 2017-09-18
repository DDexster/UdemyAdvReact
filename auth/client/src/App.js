import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Header from './components/header';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import SignOut from './components/auth/signout';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signout' component={SignOut} />
            </div>
        );
    }
}

export default App;
