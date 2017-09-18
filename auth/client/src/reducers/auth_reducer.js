import { AUTH_USER, UNAUTH_USER, AUTH_ERR } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true, error: null };
        case UNAUTH_USER:
            return { ...state, authenticated: false, error: null };
        case AUTH_ERR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};