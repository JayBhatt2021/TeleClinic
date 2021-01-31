import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Link,
    Button,
    TextField,
    makeStyles
} from '@material-ui/core';
import React from 'react';
import {
    showSignUpScreen,
    setUsername,
    setPassword,
    signIn
} from '../../../redux/actions/sign-in-page/sign-in-authorization';
import {
    getUsername,
    getErrors,
    getIsShowingErrors,
    getLogInError
} from '../../../redux/selectors/sign-in-page/sign-in-authorization';
import {
    ASTERISK_MARKS_REQUIRED_FIELD,
    WEAK_PASSWORD,
    EMPTY_REQUIRED_FIELD,
    signInFieldErrors
} from '../../../utils/constantList';

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

const SignInCard = ({username, errors, showErrors, logInError, showSignUpScreen, setUsername, setPassword, signIn}) =>
{
    const classes = useStyles();

    const showError = type => Boolean(showErrors && type);
    const showMissingFieldError = () => {
        let result = '';
        if (showErrors) {
            if (errors.username === EMPTY_REQUIRED_FIELD || errors.password === EMPTY_REQUIRED_FIELD)
                result = ASTERISK_MARKS_REQUIRED_FIELD
        }
        return result;
    };
    const getMessage = error => showErrors ? signInFieldErrors(error) : '';

    function signInOnEnter(e) {
        if (e.which === 13) {
            setPassword(e.target.value.trim());
            signIn();
        }
    }


    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    error={showError(errors.username)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    defaultValue={username}
                    onBlur={e => setUsername(e.target.value.trim())}
                    autoFocus
                />
                <p className={'error-message'}>{getMessage(errors.username)}</p>
                <TextField
                    error={showError(errors.password)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onBlur={e => setPassword(e.target.value.trim())}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onKeyPress={e => signInOnEnter(e)}
                />
                <p className={errors.password === false
                || errors.password === EMPTY_REQUIRED_FIELD
                || (errors.password === WEAK_PASSWORD && errors.firstName !== EMPTY_REQUIRED_FIELD && logInError === "")
                || (errors.password === WEAK_PASSWORD && errors.fName !== EMPTY_REQUIRED_FIELD && logInError === "")
                    ? 'hidden' : 'error-message'}> Invalid Password</p>
                <p className={logInError === '' ? 'hidden' : 'error-message'}>
                    {logInError}
                </p>
                <p className={'error-message'}>{showMissingFieldError()}</p>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={signIn}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="#" variant="body2" onClick={showSignUpScreen}>
                            {"Don't have an account? Sign up here!"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
};

SignInCard.propTypes = {
    username: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    showErrors: PropTypes.bool.isRequired,
    logInError: PropTypes.string.isRequired,
    showSignUpScreen: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    username: getUsername(state),
    errors: getErrors(state),
    showErrors: getIsShowingErrors(state),
    logInError: getLogInError(state)
});

const mapDispatchToProps = dispatch => ({
    showSignUpScreen: () => dispatch(showSignUpScreen()),
    setUsername: username => dispatch(setUsername(username)),
    setPassword: password => dispatch(setPassword(password)),
    signIn: () => dispatch(signIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInCard);
