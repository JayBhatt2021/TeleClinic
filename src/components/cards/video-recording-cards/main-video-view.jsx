import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Grid, Tooltip, Typography} from "@material-ui/core";
import {Player} from 'video-react';
import VideocamIcon from '@material-ui/icons/Videocam';
import 'video-react/dist/video-react.css';
import thumbnailIcon from "../../../utils/images/thumbnail.jpg";
import {getSavedVideosList, getVideoFileUrl} from "../../../redux/selectors/video-recording-page/videos";
import {
    addVideo,
    obtainVideos,
    setVideoFile,
    setVideoFileUrl,
    setVideoName
} from "../../../redux/actions/video-recording-page/videos";

const MainVideoView = ({
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
        addVideo();
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
                </Button>
            </Grid>
        </Grid>
    )
};

MainVideoView.propTypes = {
    videoFileUrl: PropTypes.string,
    savedVideosList: PropTypes.array.isRequired,
    setVideoName: PropTypes.func.isRequired,
    setVideoFile: PropTypes.func.isRequired,
    setVideoFileUrl: PropTypes.func.isRequired,
    addVideo: PropTypes.func.isRequired,
    obtainVideos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    videoFileUrl: getVideoFileUrl(state),
    savedVideosList: getSavedVideosList(state)
});

const mapDispatchToProps = dispatch => ({
    setVideoName: videoName => dispatch(setVideoName(videoName)),
    setVideoFile: videoFile => dispatch(setVideoFile(videoFile)),
    setVideoFileUrl: videoFileUrl => dispatch(setVideoFileUrl(videoFileUrl)),
    addVideo: () => dispatch(addVideo()),
    obtainVideos: () => dispatch(obtainVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainVideoView);
