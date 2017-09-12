import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import App from "./App";


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
