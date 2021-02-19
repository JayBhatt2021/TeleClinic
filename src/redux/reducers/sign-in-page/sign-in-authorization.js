import {
    SHOW_SIGN_IN_SCREEN,
    SHOW_SIGN_UP_SCREEN,
    SHOW_UNVERIFIED_EMAIL,
    SHOW_VERIFICATION_CODE,
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_USER_TYPE,
    SET_EMAIL,
    SET_PASSWORD,
    SET_CONFIRMED_PASSWORD,
    SET_VERIFICATION_CODE,
    SHOW_ERRORS,
    SHOW_LOG_IN_ERROR,
    SET_IS_FETCHING_SIGN_IN,
    SET_IS_CHECKING_FOR_TOKEN,
    VALIDATE_INPUT_FIELDS,
    SET_SAME_EMAIL_ERROR,
    SET_VERIFICATION_CODE_ERROR
} from "../../actions/sign-in-page/sign-in-authorization";
import {
    SIGN_IN,
    SIGN_UP,
    UNVERIFIED_EMAIL,
    VERIFICATION_CODE,
    EMPTY_REQUIRED_FIELD,
    WEAK_PASSWORD,
    PASSWORDS_DO_NOT_MATCH,
    MINIMUM_PASSWORD_LENGTH,
    INVALID_PASSWORD_LENGTH,
    LETTERS_ONLY,
    INVALID_EMAIL,
    SAME_EMAIL,
    INVALID_VERIFICATION_CODE
} from "../../../utils/constantList";
import {
    hasWeakPassword,
    isEmptyOrSpaces,
    hasLettersOnly,
    isValidEmail
} from "../../../utils/regularExpressions";

const defaultState = {
    signInComponent: SIGN_IN,
    firstName: '',
    lastName: '',
    userType: '',
    email: '',
    password: '',
    confirmedPassword: '',
    verificationCode: '',
    errors: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        verificationCode: false
    },
    showErrors: false,
    logInError: '',
    isFetchingSignIn: false,
    isCheckingForToken: false
};

const signInAuthorization = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_SIGN_IN_SCREEN:
            return {
                ...defaultState,
                signInComponent: SIGN_IN,
                email: state.email
            };
        case SHOW_SIGN_UP_SCREEN:
            return {
                ...defaultState,
                signInComponent: SIGN_UP,
                email: state.email
            };
        case SHOW_UNVERIFIED_EMAIL:
            return {
                ...defaultState,
                signInComponent: UNVERIFIED_EMAIL,
                email: state.email
            };
        case SHOW_VERIFICATION_CODE:
            return {
                ...state,
                signInComponent: VERIFICATION_CODE,
                email: state.email
            };
        case SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };
        case SET_LAST_NAME:
            return {
                ...state,
                lastName: action.payload
            };
        case SET_USER_TYPE:
            return {
                ...state,
                userType: action.payload,
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
                errors: {
                    ...state.errors,
                    email: getError(state.email, true)
                }
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
                errors: getPasswordErrors(state, action.payload, state.confirmedPassword, false)
            };
        case SET_CONFIRMED_PASSWORD:
            return {
                ...state,
                confirmedPassword: action.payload,
                errors: getPasswordErrors(state, state.password, action.payload, true)
            };
        case SET_VERIFICATION_CODE:
            return {
                ...state,
                verificationCode: action.payload
            };
        case VALIDATE_INPUT_FIELDS:
            return getValidationErrors(state, action.payload);
        case SHOW_ERRORS:
            return {
                ...state,
                showErrors: action.payload
            };
        case SHOW_LOG_IN_ERROR:
            return {
                ...state,
                logInError: action.payload
            };
        case SET_SAME_EMAIL_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    email: action.payload ? SAME_EMAIL: action.payload
                }
            };
        case SET_VERIFICATION_CODE_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    verificationCode: getVerificationCodeError(state.verificationCode, action.payload)
                }
            };
        case SET_IS_FETCHING_SIGN_IN:
            return {
                ...state,
                isFetchingSignIn: action.payload
            };
        case SET_IS_CHECKING_FOR_TOKEN:
            return {
                ...state,
                isCheckingForToken: action.payload
            };
        default:
            return state;
    }
};

function getPasswordErrors(state, password, confirmedPassword, checkConfirmedPassword) {
    if (password === '' || (checkConfirmedPassword && confirmedPassword === '')) {
        return {
            ...state.errors,
            password: EMPTY_REQUIRED_FIELD
        };
    }
    else if (hasWeakPassword(password)) {
        return {
            ...state.errors,
            password: WEAK_PASSWORD
        };
    } else if (checkConfirmedPassword && password !== confirmedPassword) {
        return {
            ...state.errors,
            password: PASSWORDS_DO_NOT_MATCH
        };
    } else if (password.length < MINIMUM_PASSWORD_LENGTH) {
        return {
            ...state.errors,
            password: INVALID_PASSWORD_LENGTH
        };
    } else {
        return {
            ...state.errors,
            password: false
        };
    }
}

// Preliminary checks before accessing database
function getError(value, isEmail = false, mustHaveLettersOnly = false) {
    if (isEmptyOrSpaces(value)) {
        return EMPTY_REQUIRED_FIELD
    } else if (mustHaveLettersOnly && !hasLettersOnly(value)) {
        return LETTERS_ONLY
    } else if (isEmail && !isValidEmail(value)) {
        return INVALID_EMAIL;
    } else {
        return false;
    }
}

function getValidationErrors(state, checkConfirmedPassword) {
    let updatedErrors = getPasswordErrors(state, state.password, state.confirmedPassword, checkConfirmedPassword);

    return {
        ...state,
        errors: {
            ...updatedErrors,
            firstName: getError(state.firstName, false, true),
            lastName: getError(state.lastName, false, true),
            email: state.errors.email === SAME_EMAIL ? SAME_EMAIL : getError(state.email, true)
        }
    }
}

function getVerificationCodeError(inputtedVerificationCode, errorDetected) {
    if (isEmptyOrSpaces(inputtedVerificationCode)) {
        return EMPTY_REQUIRED_FIELD
    } else if (errorDetected) {
        return INVALID_VERIFICATION_CODE;
    } else {
        return false;
    }
}

export default signInAuthorization;
