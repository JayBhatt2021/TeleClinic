import React from 'react';
import './video-recording-page.css';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {MAIN_VIDEO_VIEW, VIDEO_CHAT_VIEW} from "../../utils/constantList";
import {getVideoRecordingComponent} from "../../redux/selectors/video-recording-page/videos";
import MainVideoView from "../../components/cards/video-recording-cards/main-video-view";
import VideoChatView from "../../components/cards/video-recording-cards/video-chat-view";
import Spinner from "../../components/spinner";

const VideoRecordingPage = ({videoRecordingComponent}) => {
    const currentComponent = () => {
        if (videoRecordingComponent === MAIN_VIDEO_VIEW) {
            return <MainVideoView/>
        } else if (videoRecordingComponent === VIDEO_CHAT_VIEW) {
            return <VideoChatView/>
        } else {
            return <Spinner/>
        }
    };

    return (
        <div className="body">
            {currentComponent()}
        </div>
    );
};

VideoRecordingPage.propTypes = {
    videoRecordingComponent: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    videoRecordingComponent: getVideoRecordingComponent(state)
});

export default connect(mapStateToProps, null)(VideoRecordingPage);
