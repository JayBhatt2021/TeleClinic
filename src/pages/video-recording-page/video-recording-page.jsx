import React from 'react';
import './video-recording-page.css';
import {makeStyles, } from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({

}));

const VideoRecordingPage = () => {
    return (
        <div>
            To be included (Video Recording Page)
        </div>
    );
};

VideoRecordingPage.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(VideoRecordingPage);
