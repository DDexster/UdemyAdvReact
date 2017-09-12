import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
    isLoggedIn: LoginReducer
});

export default rootReducer;
