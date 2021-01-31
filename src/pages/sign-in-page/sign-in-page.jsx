import React from 'react';
import './sign-in-page.css';
import {
    makeStyles,
    Grid,
    Paper,
    CssBaseline,
} from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getSignInComponent, getIsFetchingSignIn} from "../../redux/selectors/sign-in-page/sign-in-authorization";
import SignInCard from '../../components/cards/sign-in-cards/sign-in-card';
import SignUpCard from '../../components/cards/sign-in-cards/sign-up-card';
import {SIGN_UP, SIGN_IN} from "../../utils/constantList";
import {getUserId} from "../../selectors/user/user";
import {Redirect} from "react-router-dom";
import Spinner from "../../components/spinner";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://1v1ulb40yc772j8uk01kozpe-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Kennesaw-Wellstar-Health-_-Human-Services-1.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignInPage = ({signInComponent, isFetching, userId}) => {
    const classes = useStyles();

    if(userId !== ''){
        return <Redirect to='/home-page'/>
    }

    const currentComponent = () => {
        if(isFetching === true){
            return <Spinner/>
        } else if (signInComponent === SIGN_IN) {
            return <SignInCard/>
        } else if (signInComponent === SIGN_UP) {
            return <SignUpCard/>
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
