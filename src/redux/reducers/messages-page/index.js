import {combineReducers} from 'redux';
import messages from './messages';

const messagesPage = combineReducers({
    messages,
});

export default messagesPage;
