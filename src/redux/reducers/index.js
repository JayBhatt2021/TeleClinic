import {combineReducers} from 'redux';
import signInPage from "./sign-in-page";
import messagesPage from "./messages-page";
import user from "./user";

const allReducers = combineReducers({
    signInPage,
    messagesPage,
    user
});

export default allReducers;
