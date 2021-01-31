import {combineReducers} from 'redux';
import signInAuthorization from './sign-in-authorization';

const signInPage = combineReducers({
    signInAuthorization,
});

export default signInPage;
