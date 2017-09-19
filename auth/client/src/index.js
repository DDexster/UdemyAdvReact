import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from "./actions/types";

import App from "./App";

import "./index.css";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
    store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById("root"));
