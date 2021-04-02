import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {getFullName} from '../../redux/selectors/user/current-user';
import {signOut} from "../../redux/actions/sign-in-page/sign-in-authorization";
import {navigationBarStyles} from "./navigation-bar-styles";
import {AppBar, Divider, IconButton, Toolbar} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Logo from '../../utils/images/TeleClinicLogoWhite.png';

const NavigationBar = ({fullName, signOut}) => {
    const history = useHistory();
    const location = useLocation();
    const classes = navigationBarStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                {
                    (location.pathname !== "/home-page") ?
                        (
                            <IconButton onClick={() => history.push("/home-page")}>
                                <img src={Logo} alt="logo" className={classes.otherPageLogo}/>
                            </IconButton>
                        )
                            :
                        (
                            <img src={Logo} alt="logo" className={classes.homePageLogo}/>
                        )
                }
                {
                    (location.pathname !== "/home-page") ?
                        (
                            <div className={classes.leftSide}>
                                <IconButton
                                    onClick={() => history.push("/messages")}
                                >
                                    <p className={classes.menuButton}>
                                        Messages
                                    </p>
                                </IconButton>
                                <IconButton
                                    className={classes.menuButton}
                                    onClick={() => history.push("/medical-reports")}
                                >
                                    <p className={classes.menuButton}>
                                        Medical Reports
                                    </p>
                                </IconButton>
                                <IconButton
                                    className={classes.menuButton}
                                    onClick={() => history.push("/appointment-request")}
                                >
                                    <p className={classes.menuButton}>
                                        Appointment Requests
                                    </p>
                                </IconButton>
                                <IconButton
                                    className={classes.menuButton}
                                    onClick={() => history.push("/video-recording")}
                                >
                                    <p className={classes.menuButton}>
                                        Video Recordings
                                    </p>
                                </IconButton>
                            </div>
                        )
                            :
                        (
                            <div className={classes.leftSide}>
                                <h2 className={classes.homePageTitle}>
                                    Home Page
                                </h2>
                            </div>
                        )
                    }
                <h3 className={classes.fullNameTitle}>
                    Hello, {fullName}!
                </h3>
                <Divider orientation="vertical" flexItem={true} className={classes.divider}/>
                <IconButton onClick={signOut} style={{marginLeft: 20}}>
                    <ExitToAppIcon className={classes.signOutButton}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

NavigationBar.propTypes = {
    fullName: PropTypes.string.isRequired,
    signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    fullName: getFullName(state),
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
