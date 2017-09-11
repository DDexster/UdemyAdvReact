import { SAVE_COMMENT } from "../actions/types";

export default function (state = [ 'comment' ], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            const newState = state;
            return newState.push(action.payload);
        default:
            return state;
    }
}