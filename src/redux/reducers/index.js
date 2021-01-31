import {combineReducers} from 'redux';
import signInPage from "./sign-in-page";

const allReducers = combineReducers({
    signInPage,
});

export default allReducers;
