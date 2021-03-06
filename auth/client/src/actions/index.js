import axios from "axios";
import { AUTH_USER, AUTH_ERR, UNAUTH_USER, FETCH_MESSAGE } from "./types";

const API_URL = process.env.ROOT_URL || "http://localhost:8080";

export function signInUser({ email, password, history }) {
    return (dispatch) => {
        // Submit email-pass to server
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                //if OK: update auth state
                dispatch({ type: AUTH_USER });
                // save JWT
                localStorage.setItem("token", response.data.token);
                // redirect /feature
                history.push("/feature");
            })
            .catch(() => {
                //if NOT: show error
                dispatch(authError("Bad login info"));
            });


    };
}

export function signUpUser({ email, password, history }) {
    return (dispatch) => {
        axios.post(`${API_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem("token", response.data.token);
                history.push("/feature");
            })
            .catch(() => {
                dispatch(authError("Email is in use!"));
            })
    };
}


export function signOutUser() {
    localStorage.removeItem("token");
    return { type: UNAUTH_USER };
}

export function fetchMessage() {
    return dispatch => {
        axios.get(`${API_URL}`, {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(response => {
                dispatch({type: FETCH_MESSAGE, payload: response.data.message})
            })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERR,
        payload: error
    };
}