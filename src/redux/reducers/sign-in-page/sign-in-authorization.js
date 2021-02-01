import {
    SHOW_SIGN_IN_SCREEN,
    SHOW_SIGN_UP_SCREEN,
    SHOW_UNVERIFIED_EMAIL,
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_USER_TYPE,
    SET_EMAIL,
    SET_PASSWORD,
    SET_CONFIRMED_PASSWORD,
    SHOW_ERRORS,
    SHOW_LOG_IN_ERROR,
    SET_IS_FETCHING_SIGN_IN,
    SET_IS_CHECKING_FOR_TOKEN,
    VALIDATE_INPUT_FIELDS,
    SET_SAME_EMAIL_ERROR
} from "../../actions/sign-in-page/sign-in-authorization";
import {
    SIGN_IN,
    SIGN_UP,
    UNVERIFIED_EMAIL,
    EMPTY_REQUIRED_FIELD,
    WEAK_PASSWORD,
    PASSWORDS_DO_NOT_MATCH,
    MINIMUM_PASSWORD_LENGTH,
    INVALID_PASSWORD_LENGTH,
    INVALID_CHARACTERS,
    LETTERS_ONLY,
    SAME_EMAIL
} from "../../../utils/constantList";
import {
    hasWeakPassword,
    isEmptyOrSpaces,
    hasInvalidCharacters,
    hasLettersOnly
} from "../../../utils/regularExpressions";

const defaultState = {
    signInComponent: SIGN_IN,
    firstName: '',
    lastName: '',
    userType: '',
    email: '',
    password: '',
    confirmedPassword: '',
    errors: {
        firstName: false,
        lastName: false,
        email: false,
        password: false
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
                    email: getError(state.email)
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
function getError(value, mustHaveLettersOnly = false) {
    if (isEmptyOrSpaces(value)) {
        return EMPTY_REQUIRED_FIELD
    } else if (hasInvalidCharacters(value)) {
        return INVALID_CHARACTERS
    } else if (mustHaveLettersOnly && !hasLettersOnly(value)) {
        return LETTERS_ONLY
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
            firstName: getError(state.firstName, true),
            lastName: getError(state.lastName, true),
            email: state.errors.email === SAME_EMAIL ? SAME_EMAIL : getError(state.email)
        }
    }
}

export default signInAuthorization;
