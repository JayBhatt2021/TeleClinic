import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Link
} from '@material-ui/core';
import React from 'react';
import {showSignInScreen} from '../../../redux/actions/sign-in-page/sign-in-authorization';
import {useStyles} from './use-styles';

const UnverifiedEmailCard = ({showSignInScreen}) => {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Your email has not been verified.
            </Typography>
            <br/>
            <Typography component="h3">
                Check your email for steps to verifying your TeleClinic account.
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
