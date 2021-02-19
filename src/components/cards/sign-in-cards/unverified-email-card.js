import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Link,
    CardMedia
} from '@material-ui/core';
import React from 'react';
import {showSignInScreen} from '../../../redux/actions/sign-in-page/sign-in-authorization';
import {useStyles} from './use-styles';
import Logo from "../../../utils/images/TeleClinicLogo.png";

const UnverifiedEmailCard = ({showSignInScreen}) => {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <CardMedia>
                <img src={Logo} alt={"TeleClinic Logo"}/>
            </CardMedia>
            <Typography component="h1" variant="h5">
                Your email has not been verified.
            </Typography>
            <br/>
            <Typography component="h3">
                Please check your email for steps to verifying your TeleClinic account.
                If you got multiple emails, please view the most recent one and discard the rest.
            </Typography>
            <br/>
            <Grid item xs>
                <Link href="#" variant="body2" onClick={showSignInScreen}>
                    Click here to return to the sign-in screen.
                </Link>
            </Grid>
        </div>
    )
};

UnverifiedEmailCard.propTypes = {
    showSignInScreen: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    showSignInScreen: () => dispatch(showSignInScreen())
});

export default connect(null, mapDispatchToProps)(UnverifiedEmailCard);
