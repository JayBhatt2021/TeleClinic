import fetchData from "../../../utils/api";
import {setCurrentUser} from "../user/current-user";
import {
    getErrors,
    getFirstName,
    getLastName,
    getPassword,
    getEmail,
    getUserType
} from "../../selectors/sign-in-page/sign-in-authorization";

const SET_IS_FETCHING_SIGN_IN = 'SET_IS_FETCHING_SIGN_IN';
const setIsFetchingSignIn = value => {
    return {
        type: SET_IS_FETCHING_SIGN_IN,
        payload: value
    }
};

const SET_IS_CHECKING_FOR_TOKEN = 'SET_IS_CHECKING_FOR_TOKEN';
const setIsCheckingForToken = value => {
    return {
        type: SET_IS_CHECKING_FOR_TOKEN,
        payload: value
    }
};

const SHOW_SIGN_IN_SCREEN = 'SHOW_SIGN_IN_SCREEN';
const showSignInScreen = () => {
    return {
        type: SHOW_SIGN_IN_SCREEN
    }
};

const SHOW_SIGN_UP_SCREEN = 'SHOW_SIGN_UP_SCREEN';
const showSignUpScreen = () => {
    return {
        type: SHOW_SIGN_UP_SCREEN,
    }
};

const SHOW_UNVERIFIED_EMAIL = 'SHOW_UNVERIFIED_EMAIL';
const showUnverifiedEmail = () => {
    return {
        type: SHOW_UNVERIFIED_EMAIL
    }
};

const SET_FIRST_NAME = 'SET_FIRST_NAME';
const setFirstName = firstName => {
    return {
        type: SET_FIRST_NAME,
        payload: firstName
    }
};

const SET_LAST_NAME = 'SET_LAST_NAME';
const setLastName = lastName => {
    return {
        type: SET_LAST_NAME,
        payload: lastName
    }
};

const SET_USER_TYPE = 'SET_USER_TYPE';
const setUserType = type => {
    return {
        type: SET_USER_TYPE,
        payload: type
    }
};

const SET_EMAIL = 'SET_EMAIL';
const setEmail = email => {
    return {
        type: SET_EMAIL,
        payload: email
    }
};

const SET_PASSWORD = 'SET_PASSWORD';
const setPassword = password => {
    return {
        type: SET_PASSWORD,
        payload: password
    }
};

const SET_CONFIRMED_PASSWORD = 'SET_CONFIRMED_PASSWORD';
const setConfirmedPassword = confirmedPassword => {
    return {
        type: SET_CONFIRMED_PASSWORD,
        payload: confirmedPassword
    }
};

const VALIDATE_INPUT_FIELDS = 'VALIDATE_INPUT_FIELDS';
const validateInputFields = checkConfirmedPassword => {
    return {
        type: VALIDATE_INPUT_FIELDS,
        payload: checkConfirmedPassword  // true when signing up, but not when logging in
    }
};

const SHOW_ERRORS = 'SHOW_ERRORS';
const showErrors = value => {
    return {
        type: SHOW_ERRORS,
        payload: value
    }
};

const SHOW_LOG_IN_ERROR = 'SHOW_LOG_IN_ERROR';
const showLogInError = error => {
    return {
        type: SHOW_LOG_IN_ERROR,
        payload: error
    }
};

const SET_SAME_EMAIL_ERROR = 'SET_SAME_EMAIL_ERROR';
const setSameEmailError = value => {
    return {
        type: SET_SAME_EMAIL_ERROR,
        payload: value
    }
};

function getUserInfo() {
    return dispatch => {
        const route = '/get-user';

        const params = {};

        return fetchData(route, params)
            .then(res => dispatch(setCurrentUser(res)))
            .then(() => dispatch(setIsCheckingForToken(false)))
            .then(() => dispatch(setIsFetchingSignIn(false)))
    }
}

function checkToken() {
    return dispatch => {
        dispatch(setIsCheckingForToken(true));
        const token = localStorage.getItem("idToken");
        const tokenExists = (token !== undefined && token !== null && token !== '');
        if (tokenExists) {
            return dispatch(getUserInfo())
        } else {
            return dispatch(setIsCheckingForToken(false))
        }
    }
}

function signIn() {
    return (dispatch, getState) => {
        dispatch(setIsFetchingSignIn(true));
        dispatch(validateInputFields(false));
        const state = getState();
        const errors = getErrors(state);

        if (errors.email || errors.password) {
            dispatch(showErrors(true));
            return dispatch(setIsFetchingSignIn(false));
        }

        const params = {
            email: getEmail(state),
            password: getPassword(state)
        };

        const route = '/sign-in';

        dispatch(setPassword(''));

        return fetchData(route, params)
            .then(res => {
                localStorage.setItem('idToken', `Bearer ${res.idToken}`);
                dispatch(getUserInfo());
            })
            .catch(err => {
                dispatch(setIsFetchingSignIn(false));
                if (err.status === 401) {
                    return dispatch(showUnverifiedEmail())
                } else if (err.status === 403) {
                    return dispatch(showLogInError('Invalid Email or Password'))
                } else {
                    return dispatch(showLogInError('There was an error signing in. Please try again.'))
                }
            })
    };
}

function signUp() {
    return (dispatch, getState) => {
        dispatch(validateInputFields(true));
        const state = getState();
        const errors = getErrors(state);
        let hasErrors = false;
        Object.values(errors).forEach(error => {
            if (error !== false) {
                hasErrors = true;
            }
        });

        if (hasErrors) {
            return dispatch(showErrors(true));
        } else {
            dispatch(showErrors(false));
            dispatch(setIsFetchingSignIn(true));
            const params = {
                firstName: getFirstName(state),
                lastName: getLastName(state),
                email: getEmail(state),
                password: getPassword(state),
                userType: getUserType(state)
            };

            const route = '/sign-up';

            dispatch(setPassword(''));
            dispatch(setConfirmedPassword(''));

            return fetchData(route, params)
                .then(res => {
                    if (res.message === 'Email exists.')
                    {
                        dispatch(setSameEmailError(true))
                        dispatch(showErrors(true))
                    }
                    else
                    {
                        dispatch(showUnverifiedEmail())
                    }
                })
                .then(() => dispatch(setIsFetchingSignIn(false)))
                .catch(err => {
                    dispatch(setIsFetchingSignIn(false));
                });
        }
    }
}

function signOut() {
    return dispatch => {
        dispatch(setIsCheckingForToken(true));
        dispatch(setIsFetchingSignIn(true));

        localStorage.removeItem("idToken");

        dispatch(setCurrentUser({
            userId: '',
            userFirstName: '',
            userLastName: ''
        }));

        dispatch(showLogInError('NONE'));
        dispatch(setIsFetchingSignIn(false));
        dispatch(setIsCheckingForToken(false))
    };
}

export {
    SET_IS_FETCHING_SIGN_IN,
    setIsFetchingSignIn,
    SET_IS_CHECKING_FOR_TOKEN,
    setIsCheckingForToken,
    SHOW_SIGN_IN_SCREEN,
    showSignInScreen,
    SHOW_SIGN_UP_SCREEN,
    showSignUpScreen,
    SHOW_UNVERIFIED_EMAIL,
    showUnverifiedEmail,
    SET_FIRST_NAME,
    setFirstName,
    SET_LAST_NAME,
    setLastName,
    SET_USER_TYPE,
    setUserType,
    SET_EMAIL,
    setEmail,
    SET_PASSWORD,
    setPassword,
    SET_CONFIRMED_PASSWORD,
    setConfirmedPassword,
    VALIDATE_INPUT_FIELDS,
    validateInputFields,
    SHOW_ERRORS,
    showErrors,
    SHOW_LOG_IN_ERROR,
    showLogInError,
    SET_SAME_EMAIL_ERROR,
    setSameEmailError,
    getUserInfo,
    checkToken,
    signIn,
    signUp,
    signOut
}
