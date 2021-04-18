import React from 'react';
import './video-recording-page.css';
import {connect} from "react-redux";
import VideoView from "../../components/cards/video-recording-cards/video-view";

const VideoRecordingPage = () => {
    return (
        <div className="body">
            <VideoView/>
        </div>
    );
};

export default connect(null, null)(VideoRecordingPage);
