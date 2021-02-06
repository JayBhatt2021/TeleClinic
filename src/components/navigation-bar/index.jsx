import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {getFullName} from '../../redux/selectors/user/current-user';
import {signOut} from "../../redux/actions/sign-in-page/sign-in-authorization";
import './_style.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from "@material-ui/core/IconButton";
import {Typography} from "@material-ui/core";
import Logo from '../../utils/images/TeleClinicLogo.png';

const NavigationBar = ({fullName, signOut}) => {
    return (
        <nav>
            <Link to="/home-page" className={"header-image"}>
                <img src={Logo} alt="Logo"/>
            </Link>
            <ul className='nav-links'>
                <Link to="/messages" className="nav-style">
                    <p>MESSAGES</p>
                </Link>
                <Link to="/medical-reports" className="nav-style">
                    <p>MEDICAL REPORTS</p>
                </Link>
                <Link to="/appointment-request" className="nav-style">
                    <p>APPOINTMENT REQUESTS</p>
                </Link>
                <Link to="/video-recording" className="nav-style">
                    <p>VIDEO RECORDINGS</p>
                </Link>
                <Typography className="nav-style-2"> | </Typography>
                <Typography className="nav-style-2">Hello, {fullName}!</Typography>
                <IconButton onClick={signOut}><ExitToAppIcon/></IconButton>
            </ul>
        </nav>
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
    signOut: () => dispatch(signOut()),

});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
