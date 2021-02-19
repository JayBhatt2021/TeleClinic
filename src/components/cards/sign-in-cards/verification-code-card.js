import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Typography, CardMedia, TextField, Button} from '@material-ui/core';
import React from 'react';
import {
    setVerificationCode,
    authorizeVerificationCode
} from '../../../redux/actions/sign-in-page/sign-in-authorization';
import {getErrors, getIsShowingErrors} from "../../../redux/selectors/sign-in-page/sign-in-authorization";
import {useStyles} from './use-styles';
import Logo from "../../../utils/images/TeleClinicLogo.png";
import {ASTERISK_MARKS_REQUIRED_FIELD, EMPTY_REQUIRED_FIELD, signInFieldErrors} from "../../../utils/constantList";

const VerificationCodeCard = ({setVerificationCode, errors, showErrors, authorizeVerificationCode}) => {
    const classes = useStyles();

    const showError = type => Boolean(showErrors && type);
    const showMissingFieldError = () => {
        let result = '';
        if (showErrors) {
            if (errors.verificationCode === EMPTY_REQUIRED_FIELD)
                result = ASTERISK_MARKS_REQUIRED_FIELD
        }
        return result;
    };

    const finishSignUpOnEnter = e => {
        if (e.which === 13) {
            e.preventDefault();
            setVerificationCode(e.target.value.trim());
            authorizeVerificationCode();
        }
    };

    return (
        <div className={classes.paper}>
            <CardMedia>
                <img src={Logo} alt={"TeleClinic Logo"}/>
            </CardMedia>
            <Typography component="h1" variant="h5">
                Verification Code
            </Typography>
            <br/>
            <Typography component="h3">
                Enter the correct verification code to prove that you are a doctor/administrator.
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    error={showError(errors.verificationCode)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="verificationCode"
                    label="Verification Code"
                    type="password"
                    id="verificationCode"
                    onBlur={e => setVerificationCode(e.target.value.trim())}
                    onKeyPress={e => finishSignUpOnEnter(e)}
                />
                <p className={'error-color'}>{signInFieldErrors(errors.verificationCode)}</p>
                <p className={'error-message'}>{showMissingFieldError()}</p>
                <Button
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={authorizeVerificationCode}
                >
                    Finish Sign Up
                </Button>
            </form>
        </div>
    )
};

VerificationCodeCard.propTypes = {
    errors: PropTypes.object.isRequired,
    showErrors: PropTypes.bool.isRequired,
    setVerificationCode: PropTypes.func.isRequired,
    authorizeVerificationCode: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: getErrors(state),
    showErrors: getIsShowingErrors(state)
});

const mapDispatchToProps = dispatch => ({
    setVerificationCode: code => dispatch(setVerificationCode(code)),
    authorizeVerificationCode: () => dispatch(authorizeVerificationCode())
});

export default connect(mapStateToProps, mapDispatchToProps)(VerificationCodeCard);
