import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Header from './components/header';
import SignIn from './components/auth/signin';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Route path='/signin' component={SignIn} />
            </div>
        );
    }
}

export default App;
