import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Grid, Tooltip, Typography} from "@material-ui/core";
import {Player} from 'video-react';
import VideocamIcon from '@material-ui/icons/Videocam';
import 'video-react/dist/video-react.css';
import thumbnailIcon from "../../../utils/images/thumbnail.jpg";
import {DOCTOR_TYPE, ADMINISTRATOR_TYPE} from "../../../utils/constantList";
import {getUserType} from "../../../redux/selectors/user/current-user";
import {getSavedVideosList, getVideoFileUrl} from "../../../redux/selectors/video-recording-page/videos";
import {
    addVideo,
    obtainVideos,
    setVideoFile,
    setVideoFileUrl,
    setVideoName
} from "../../../redux/actions/video-recording-page/videos";

const VideoView = ({
                       userType,
                       videoFileUrl,
                       savedVideosList,
                       setVideoName,
                       setVideoFile,
                       setVideoFileUrl,
                       addVideo,
                       obtainVideos
                   }) => {
    const classes = useStyles();

    useEffect(() => {
        obtainVideos();
    });

    const addSavedVideo = videoFileInput => {
        setVideoFile(videoFileInput);
        let videoNameInput = prompt("Enter the name of the video.");
        setVideoName(videoNameInput);
        let videoReceiverName = prompt("Now, enter the name of the video recipient.");
        addVideo(videoReceiverName);
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={9}>
                <Player
                    playsInline
                    fluid={false}
                    width={1050}
                    height={600}
                    src={videoFileUrl}
                />
            </Grid>
            <Grid item xs={3} className={classes.verticalAlign}>
                <Card className={classes.cardContainer}>
                    <Typography
                        align="center"
                        variant="h5"
                        className={classes.cardTitle}
                    >
                        Saved Videos
                    </Typography>
                    {
                        savedVideosList.length > 0 ?
                            savedVideosList.map(video => {
                                return (
                                    <Tooltip
                                        title={video.videoName}
                                        justify={'center'}
                                        style={{width: "100%"}}
                                        className={classes.thumbnailButton}
                                    >
                                        <Button
                                            onClick={() => setVideoFileUrl(video.videoFileUrl)}
                                        >
                                            <img
                                                src={thumbnailIcon}
                                                alt="Thumbnail Icon"
                                                className={classes.thumbnailIcon}
                                            />
                                        </Button>
                                    </Tooltip>
                                )
                            })
                            :
                            <Typography align="center" variant="h6">
                                There are currently no saved videos.
                            </Typography>
                    }
                </Card>
                {
                    (userType === DOCTOR_TYPE || userType === ADMINISTRATOR_TYPE) ?
                        <Button
                            color="primary"
                            variant="contained"
                            component="label"
                            startIcon={<VideocamIcon style={{fill: "white"}}/>}
                            className={classes.videoUploadButton}
                        >
                            <Typography variant="inherit" className={classes.videoUploadButtonText}>
                                Add Video
                            </Typography>
                            <input
                                id="addVideo"
                                type="file"
                                name="Add Video"
                                accept="video/*"
                                onChange={e => addSavedVideo(e.target.files[0])}
                                hidden
                            />
                        </Button> : null
                }
            </Grid>
        </Grid>
    )
};

VideoView.propTypes = {
    userType: PropTypes.string.isRequired,
    videoFileUrl: PropTypes.string,
    savedVideosList: PropTypes.array.isRequired,
    setVideoName: PropTypes.func.isRequired,
    setVideoFile: PropTypes.func.isRequired,
    setVideoFileUrl: PropTypes.func.isRequired,
    addVideo: PropTypes.func.isRequired,
    obtainVideos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userType: getUserType(state),
    videoFileUrl: getVideoFileUrl(state),
    savedVideosList: getSavedVideosList(state)
});

const mapDispatchToProps = dispatch => ({
    setVideoName: videoName => dispatch(setVideoName(videoName)),
    setVideoFile: videoFile => dispatch(setVideoFile(videoFile)),
    setVideoFileUrl: videoFileUrl => dispatch(setVideoFileUrl(videoFileUrl)),
    addVideo: videoRecipientName => dispatch(addVideo(videoRecipientName)),
    obtainVideos: () => dispatch(obtainVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoView);
