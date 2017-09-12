import React, { Component } from "react";
import Header from "./components/header";
import Resources from './components/resources';
import Home from './components/home';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route path='/resources' component={Resources} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        );
    }
}


export default App;
