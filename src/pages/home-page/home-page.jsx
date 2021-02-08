import React from 'react';
import './home-page.css';
import {useHistory} from "react-router-dom";
import {Button, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import {homePageStyles} from "./home-page-styles";
import messagesIcon from "../../utils/images/messagesIcon.png";
import medicalReportsIcon from "../../utils/images/medicalReportsIcon.png";
import appointmentRequestsIcon from "../../utils/images/appointmentRequestsIcon.png";
import videoRecordingIcon from "../../utils/images/videoRecordingIcon.png";

const HomePage = () => {
    const history = useHistory();
    const classes = homePageStyles();

    return (
        <Grid container={true} direction="row" className={classes.gridContainer}>
            <Grid item={true} xs={6} align="center">
                <Button
                    onClick={() => history.push("/messages")}
                    className={classes.buttonPosition}
                >
                    <img
                        src={messagesIcon}
                        alt="Messages Icon"
                        className={classes.imageIcon}
                    />
                    <figcaption className="figcaption">Messages</figcaption>
                </Button>
            </Grid>
            <Grid item={true} xs={6} align="center">
                <Button
                    onClick={() => history.push("/medical-reports")}
                    className={classes.buttonPosition}
                >
                    <img
                        src={medicalReportsIcon}
                        alt="Medical Reports Icon"
                        className={classes.imageIcon}
                    />
                    <figcaption className="figcaption">Medical Reports</figcaption>
                </Button>
            </Grid>
            <Grid item={true} xs={6} align="center">
                <Button
                    onClick={() => history.push("/appointment-request")}
                    className={classes.buttonPosition}
                >
                    <img
                        src={appointmentRequestsIcon}
                        alt="Appointment Requests Icon"
                        className={classes.imageIcon}
                    />
                    <figcaption className="figcaption">Appointment Requests</figcaption>
                </Button>
            </Grid>
            <Grid item={true} xs={6} align="center">
                <Button
                    onClick={() => history.push("/video-recording")}
                    className={classes.buttonPosition}
                >
                    <img
                        src={videoRecordingIcon}
                        alt="Video Recording Icon"
                        className={classes.imageIcon}
                    />
                    <figcaption className="figcaption">Video Recordings</figcaption>
                </Button>
            </Grid>
        </Grid>
    );
};

export default connect(null, null)(HomePage);
