import React from 'react';
import {
    Grid,
    Paper,
    CssBaseline,
} from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getSignInComponent, getIsFetchingSignIn} from "../../redux/selectors/sign-in-page/sign-in-authorization";
import SignInCard from '../../components/cards/sign-in-cards/sign-in-card';
import SignUpCard from '../../components/cards/sign-in-cards/sign-up-card';
import UnverifiedEmailCard from "../../components/cards/sign-in-cards/unverified-email-card";
import {SIGN_UP, SIGN_IN, UNVERIFIED_EMAIL} from "../../utils/constantList";
import {getUserId} from "../../redux/selectors/user/current-user";
import {useHistory} from "react-router-dom";
import Spinner from "../../components/spinner";
import {signInPageStyles} from "./sign-in-page-styles";

const SignInPage = ({signInComponent, isFetching, userId}) => {
    const history = useHistory();
    const classes = signInPageStyles();

    if(userId !== ''){
        history.push("/home-page");
        history.go(0);
    }

    const currentComponent = () => {
        if (isFetching === true) {
            return <Spinner/>
        } else if (signInComponent === SIGN_IN) {
            return <SignInCard/>
        } else if (signInComponent === SIGN_UP) {
            return <SignUpCard/>
        } else if (signInComponent === UNVERIFIED_EMAIL) {
            return <UnverifiedEmailCard/>
        }
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                {currentComponent()}
            </Grid>
        </Grid>
    );
};

SignInPage.propTypes = {
    signInComponent: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    signInComponent: getSignInComponent(state),
    isFetching: getIsFetchingSignIn(state),
    userId: getUserId(state)
});

export default connect(mapStateToProps, null)(SignInPage);
