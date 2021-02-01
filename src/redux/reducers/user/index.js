import {combineReducers} from 'redux';
import currentUser from "./current-user";

const user = combineReducers({
    currentUser,
});

export default user;
