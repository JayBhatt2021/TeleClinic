const getVideoName = state => state.videoRecordingPage.videos.videoName;

const getVideoFile = state => state.videoRecordingPage.videos.videoFile;

const getVideoFileUrl = state => state.videoRecordingPage.videos.videoFileUrl;

const getSavedVideosList = state => state.videoRecordingPage.videos.savedVideosList;

export {
    getVideoName,
    getVideoFile,
    getVideoFileUrl,
    getSavedVideosList
};
