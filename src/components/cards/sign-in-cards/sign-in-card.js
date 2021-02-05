import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Link,
    Button,
    TextField,
    CardMedia
} from '@material-ui/core';
import React from 'react';
import {
    showSignUpScreen,
    setEmail,
    setPassword,
    signIn
} from '../../../redux/actions/sign-in-page/sign-in-authorization';
import {
    getEmail,
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
import {useStyles} from './use-styles';
import Logo from '../../../utils/images/TeleClinicLogo.png';

const SignInCard = ({email, errors, showErrors, logInError, showSignUpScreen, setEmail, setPassword, signIn}) =>
{
    const classes = useStyles();

    const showError = type => Boolean(showErrors && type);
    const showMissingFieldError = () => {
        let result = '';
        if (showErrors) {
            if (errors.email === EMPTY_REQUIRED_FIELD || errors.password === EMPTY_REQUIRED_FIELD)
                result = ASTERISK_MARKS_REQUIRED_FIELD
        }
        return result;
    };
    const getMessage = error => showErrors ? signInFieldErrors(error) : '';

    const signInOnEnter = e => {
        if (e.which === 13) {
            setPassword(e.target.value.trim());
            signIn();
        }
    }

    return (
        <div className={classes.paper}>
            <CardMedia>
                <img src={Logo} alt={"TeleClinic Logo"}/>
            </CardMedia>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    error={showError(errors.email)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    defaultValue={email}
                    onBlur={e => setEmail(e.target.value.trim())}
                    autoFocus
                />
                <p className={'error-message'}>{getMessage(errors.email)}</p>
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
                || (errors.password === WEAK_PASSWORD && errors.firstName !== EMPTY_REQUIRED_FIELD && logInError === "")
                    ? 'hidden' : 'error-message'}>Invalid Password</p>
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
                <Grid container style={{justifyContent: 'center'}}>
                    <Link href="#" variant="body2" onClick={showSignUpScreen}>
                        {"Don't have an account? Sign up here!"}
                    </Link>
                </Grid>
            </form>
        </div>
    )
};

SignInCard.propTypes = {
    email: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    showErrors: PropTypes.bool.isRequired,
    logInError: PropTypes.string.isRequired,
    showSignUpScreen: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    email: getEmail(state),
    errors: getErrors(state),
    showErrors: getIsShowingErrors(state),
    logInError: getLogInError(state)
});

const mapDispatchToProps = dispatch => ({
    showSignUpScreen: () => dispatch(showSignUpScreen()),
    setEmail: email => dispatch(setEmail(email)),
    setPassword: password => dispatch(setPassword(password)),
    signIn: () => dispatch(signIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInCard);
