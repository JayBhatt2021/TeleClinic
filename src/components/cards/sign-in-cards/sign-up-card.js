import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Link,
    Button,
    TextField, CardMedia
} from '@material-ui/core';
import React from 'react';
import './_style.css';
import {
    showSignInScreen,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmedPassword,
    signUp
} from '../../../redux/actions/sign-in-page/sign-in-authorization';
import {
    getFirstName,
    getLastName,
    getEmail,
    getErrors,
    getIsShowingErrors
} from '../../../redux/selectors/sign-in-page/sign-in-authorization';
import UserTypeRadioButtons from '../../radio-buttons';
import {
    ASTERISK_MARKS_REQUIRED_FIELD,
    EMPTY_REQUIRED_FIELD,
    signInFieldErrors
} from '../../../utils/constantList';
import {useStyles} from './use-styles';
import Logo from "../../../utils/images/TeleClinicLogo.png";

const SignUpCard = ({
                        firstName, lastName, email, errors, showErrors, showSignInScreen, setFirstName, setLastName,
                        setEmail, setPassword, setConfirmedPassword, signUp
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

    const signUpOnEnter = e => {
        if (e.which === 13) {
            setPassword(e.target.value.trim());
            signUp();
        }
    }

    return (

        <div className={classes.paper}>
            <CardMedia>
                <img src={Logo} alt={"TeleClinic Logo"}/>
            </CardMedia>
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
                    error={showError(errors.email)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    defaultValue={email}
                    onBlur={e => setEmail(e.target.value.trim())}
                    autoComplete="email"
                />
                <p className={'error-message'}>{signInFieldErrors(errors.email)}</p>
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
                    onKeyPress={e => signUpOnEnter(e)}
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
                <Grid container style={{justifyContent: 'center'}}>
                    <Link href="#" variant="body2" onClick={showSignInScreen}>
                        {"Already have an account? Sign in here!"}
                    </Link>
                </Grid>
            </form>
        </div>
    );
};

SignUpCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    showErrors: PropTypes.bool.isRequired,
    showSignInScreen: PropTypes.func.isRequired,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setConfirmedPassword: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    firstName: getFirstName(state),
    lastName: getLastName(state),
    email: getEmail(state),
    errors: getErrors(state),
    showErrors: getIsShowingErrors(state)
});

const mapDispatchToProps = dispatch => ({
    showSignInScreen: () => dispatch(showSignInScreen()),
    setFirstName: firstName => dispatch(setFirstName(firstName)),
    setLastName: lastName => dispatch(setLastName(lastName)),
    setEmail: email => dispatch(setEmail(email)),
    setPassword: password => dispatch(setPassword(password)),
    setConfirmedPassword: confirmedPassword => dispatch(setConfirmedPassword(confirmedPassword)),
    signUp: () => dispatch(signUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpCard);
