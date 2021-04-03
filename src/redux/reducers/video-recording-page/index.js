import {combineReducers} from 'redux';
import videos from './videos';

const videoRecordingPage = combineReducers({
    videos,
});

export default videoRecordingPage;
