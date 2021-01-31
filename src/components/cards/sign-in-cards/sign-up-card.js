import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Link,
    Button,
    TextField,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import './_style.css';
import {
    showSignInScreen,
    setFirstName,
    setLastName,
    setUsername,
    setPassword,
    setConfirmedPassword,
    signUp
} from '../../../redux/actions/sign-in-page/sign-in-authorization';
import {
    getFirstName,
    getLastName,
    getUsername,
    getErrors,
    getIsShowingErrors
} from '../../../redux/selectors/sign-in-page/sign-in-authorization';
import UserTypeRadioButtons from '../../radio-buttons';
import {
    ASTERISK_MARKS_REQUIRED_FIELD,
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

const SignUpCard = ({
                        firstName, lastName, username, errors, showErrors, showSignInScreen, setFirstName, setLastName,
                        setUsername, setPassword, setConfirmedPassword, signUp
                    }) =>
{
    const classes = useStyles();

    const showError = type => Boolean(showErrors && type);
    const showMissingFieldError = () => {
        let result = '';
        if (showErrors) {
            Object.values(errors).filter(item =>
            {
                if (item === EMPTY_REQUIRED_FIELD)
                    result = ASTERISK_MARKS_REQUIRED_FIELD
            });
        }
        return result;
    };

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <form className={classes.form} noValidate>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start">
                    <Grid item>
                        <TextField
                            error={showError(errors.firstName)}
                            variant="outlined"
                            margin="normal"
                            required
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            onBlur={e => setFirstName(e.target.value.trim())}
                            defaultValue={firstName}
                        />
                        <p className={'error-color'}>{signInFieldErrors(errors.firstName)}</p>
                    </Grid>
                    <Grid>
                        <TextField
                            error={showError(errors.lastName)}
                            variant="outlined"
                            margin="normal"
                            required
                            id="lastName"
                            label="Last Name"
                            onBlur={e => setLastName(e.target.value.trim())}
                            name="lastName"
                            defaultValue={lastName}
                        />
                        <p className={'error-color'}>{signInFieldErrors(errors.lastName)}</p>
                    </Grid>
                </Grid>
                <UserTypeRadioButtons/>
                <TextField
                    error={showError(errors.username)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    defaultValue={username}
                    onBlur={e => setUsername(e.target.value.trim())}
                    autoComplete="email"
                />
                <p className={'error-message'}>{signInFieldErrors(errors.username)}</p>
                <TextField
                    error={showError(errors.password)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onBlur={e => setPassword(e.target.value.trim())}
                />
                <TextField
                    error={showError(errors.password)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    onBlur={e => setConfirmedPassword(e.target.value.trim())}
                />
                <p className={'error-message'}>{signInFieldErrors(errors.password)}</p>
                <p className={'error-message'}>{showMissingFieldError()}</p>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={signUp}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="#" variant="body2" onClick={showSignInScreen}>
                            {"Already have an account? Sign in here!"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

SignUpCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    showErrors: PropTypes.bool.isRequired,
    showSignInScreen: PropTypes.func.isRequired,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setConfirmedPassword: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    firstName: getFirstName(state),
    lastName: getLastName(state),
    username: getUsername(state),
    errors: getErrors(state),
    showErrors: getIsShowingErrors(state)
});

const mapDispatchToProps = dispatch => ({
    showSignInScreen: () => dispatch(showSignInScreen()),
    setFirstName: firstName => dispatch(setFirstName(firstName)),
    setLastName: lastName => dispatch(setLastName(lastName)),
    setUsername: username => dispatch(setUsername(username)),
    setPassword: password => dispatch(setPassword(password)),
    setConfirmedPassword: confirmedPassword => dispatch(setConfirmedPassword(confirmedPassword)),
    signUp: () => dispatch(signUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpCard);
