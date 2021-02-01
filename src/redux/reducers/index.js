import {combineReducers} from 'redux';
import signInPage from "./sign-in-page";
import user from "./user";

const allReducers = combineReducers({
    signInPage,
    user
});

export default allReducers;
