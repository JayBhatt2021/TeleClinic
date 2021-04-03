import {
    SHOW_MAIN_VIDEO_VIEW,
    SHOW_VIDEO_CHAT_VIEW
} from "../../actions/video-recording-page/videos";
import {MAIN_VIDEO_VIEW, VIDEO_CHAT_VIEW} from "../../../utils/constantList";

const defaultState = {
    videoRecordingComponent: MAIN_VIDEO_VIEW,
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
        default:
            return state;
    }
};

export default videos;
