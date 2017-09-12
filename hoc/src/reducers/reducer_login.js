import { TOGGLE_LOGIN } from "../actions/index";

export default function (state = false, action) {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return action.payload;
        default:
            return state;
    }
}