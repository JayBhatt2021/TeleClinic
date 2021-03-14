import {combineReducers} from 'redux';
import signInPage from "./sign-in-page";
import messagesPage from "./messages-page";
import medicalReportsPage from "./medical-reports-page";
import user from "./user";

const allReducers = combineReducers({
    signInPage,
    messagesPage,
    medicalReportsPage,
    user
});

export default allReducers;
