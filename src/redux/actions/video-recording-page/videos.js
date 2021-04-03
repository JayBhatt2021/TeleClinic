import fetchData from "../../../utils/api";

const SHOW_MAIN_VIDEO_VIEW = 'SHOW_MAIN_VIDEO_VIEW';
const showMainVideoView = () => {
    return {
        type: SHOW_MAIN_VIDEO_VIEW
    }
};

const SHOW_VIDEO_CHAT_VIEW = 'SHOW_VIDEO_CHAT_VIEW';
const showVideoChatView = () => {
    return {
        type: SHOW_VIDEO_CHAT_VIEW
    }
};

function dummyFunction() {
    return () => {
        const route = '/dummy';

        return fetchData(route)
            .catch(err => {
                console.log(err);
            });
    };
}

export {
    SHOW_MAIN_VIDEO_VIEW,
    showMainVideoView,
    SHOW_VIDEO_CHAT_VIEW,
    showVideoChatView,
    dummyFunction
}
