import axios from 'axios';
import fetchData from "../../../utils/api";
import {getFullName, getUserType} from "../../selectors/user/current-user";
import {getVideoFile, getVideoName} from "../../selectors/video-recording-page/videos";

const SET_VIDEO_NAME = 'SET_VIDEO_NAME';
const setVideoName = videoName => {
    return {
        type: SET_VIDEO_NAME,
        payload: videoName
    }
};

const SET_VIDEO_FILE = 'SET_VIDEO_FILE';
const setVideoFile = videoFile => {
    return {
        type: SET_VIDEO_FILE,
        payload: videoFile
    }
};

const SET_VIDEO_FILE_URL = 'SET_VIDEO_FILE_URL';
const setVideoFileUrl = videoFileUrl => {
    return {
        type: SET_VIDEO_FILE_URL,
        payload: videoFileUrl
    }
};

const SET_SAVED_VIDEOS_LIST = 'SET_SAVED_VIDEOS_LIST';
const setSavedVideosList = savedVideosList => {
    return {
        type: SET_SAVED_VIDEOS_LIST,
        payload: savedVideosList
    }
};

function addVideo(videoRecipientName) {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            receiverName: videoRecipientName,
            videoName: getVideoName(state),
        };

        const route = '/add-video';

        return fetchData(route, params)
            .then(() => {
                dispatch(uploadVideoFile());
            })
            .catch(err => {
                console.log(err);
            });
    };
}

function uploadVideoFile() {
    return (dispatch, getState) => {
        const state = getState();

        const videoFile = getVideoFile(state);
        const data = new FormData();
        data.append('file', videoFile, videoFile.name);

        const route = '/upload-video-file';

        dispatch(setVideoFile(null));

        axios.post('https://us-central1-teleclinic-8aa6b.cloudfunctions.net/api' + route, data,
            {headers: {'Authorization': localStorage.getItem("idToken")}})
            .then(res => {
                dispatch(updateVideoFileLocation(res.data));
            })
            .catch(err => {
                console.log(err)
            })
    }
}

function updateVideoFileLocation(videoFileLocation) {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            videoName: getVideoName(state),
            videoFileUrl: videoFileLocation
        };

        const route = '/update-video-file-location';

        dispatch(setVideoName(''));

        return fetchData(route, params)
            .catch(err => {
                console.log(err);
            });
    };
}

function obtainVideos() {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            receiverName: getFullName(state),
            userType: getUserType(state)
        };

        const route = '/obtain-videos';

        return fetchData(route, params)
            .then(res => {
                dispatch(setSavedVideosList(res));
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export {
    SET_VIDEO_NAME,
    setVideoName,
    SET_VIDEO_FILE,
    setVideoFile,
    SET_VIDEO_FILE_URL,
    setVideoFileUrl,
    SET_SAVED_VIDEOS_LIST,
    setSavedVideosList,
    addVideo,
    uploadVideoFile,
    obtainVideos
}
