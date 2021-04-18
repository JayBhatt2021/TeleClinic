import {
    SET_VIDEO_NAME,
    SET_VIDEO_FILE,
    SET_VIDEO_FILE_URL,
    SET_SAVED_VIDEOS_LIST
} from "../../actions/video-recording-page/videos";

const defaultState = {
    videoName: '',
    videoFile: null,
    videoFileUrl: '',
    savedVideosList: []
};

const videos = (state = defaultState, action) => {
    switch (action.type) {
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
