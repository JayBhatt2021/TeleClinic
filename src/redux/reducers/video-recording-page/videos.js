import {
    SHOW_MAIN_VIDEO_VIEW,
    SHOW_VIDEO_CHAT_VIEW,
    SET_VIDEO_NAME,
    SET_VIDEO_FILE,
    SET_VIDEO_FILE_URL,
    SET_SAVED_VIDEOS_LIST
} from "../../actions/video-recording-page/videos";
import {MAIN_VIDEO_VIEW, VIDEO_CHAT_VIEW} from "../../../utils/constantList";

const defaultState = {
    videoRecordingComponent: MAIN_VIDEO_VIEW,
    videoName: '',
    videoFile: null,
    videoFileUrl: '',
    savedVideosList: []
};

const videos = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_MAIN_VIDEO_VIEW:
            return {
                ...state,
                videoRecordingComponent: MAIN_VIDEO_VIEW
            };
        case SHOW_VIDEO_CHAT_VIEW:
            return {
                ...state,
                videoRecordingComponent: VIDEO_CHAT_VIEW
            };
        case SET_VIDEO_NAME:
            return {
                ...state,
                videoName: action.payload
            };
        case SET_VIDEO_FILE:
            return {
                ...state,
                videoFile: action.payload
            };
        case SET_VIDEO_FILE_URL:
            return {
                ...state,
                videoFileUrl: action.payload
            };
        case SET_SAVED_VIDEOS_LIST:
            return {
                ...state,
                savedVideosList: action.payload
            };
        default:
            return state;
    }
};

export default videos;
