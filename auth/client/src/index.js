import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reduxThunk from 'redux-thunk';

import App from "./App";

import "./index.css";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById("root"));
