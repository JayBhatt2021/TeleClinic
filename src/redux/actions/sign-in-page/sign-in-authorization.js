import fetchData from "../../../utils/api";

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

const SET_USERNAME = 'SET_USERNAME';
const setUsername = username => {
    return {
        type: SET_USERNAME,
        payload: username
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

function getUserInfo() {
    // return dispatch => {
    //     const route = '/get-user';
    //
    //     const params = {};
    //
    //     return fetchData(route, params)
    //         .then(res => dispatch(setCurrentUser(res)))
    //         .then(() => dispatch(setIsCheckingForToken(false)))
    //         .then(() => dispatch(setIsFetchingSignIn(false)))
    // }
}

function checkToken() {
    // return dispatch => {
    //     dispatch(setIsCheckingForToken(true));
    //     const token = localStorage.getItem("idToken");
    //     const tokenExists = (token !== undefined && token !== null && token !== '');
    //     if (tokenExists) {
    //         return dispatch(getUserInfo())
    //     } else {
    //         return dispatch(setIsCheckingForToken(false))
    //     }
    // }
}

function signIn() {

}

function signUp() {

}

function signOut() {
    // return dispatch => {
    //     dispatch(setIsCheckingForToken(true));
    //     dispatch(setIsFetchingSignIn(true));
    //
    //     localStorage.removeItem("idToken");
    //
    //     dispatch(setCurrentUser({
    //         userId: '',
    //         userName: ''
    //     }));
    //
    //     dispatch(showLogInError('NONE'));
    //     dispatch(setIsFetchingSignIn(false));
    //     dispatch(setIsCheckingForToken(false))
    // };
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
    SET_FIRST_NAME,
    setFirstName,
    SET_LAST_NAME,
    setLastName,
    SET_USER_TYPE,
    setUserType,
    SET_USERNAME,
    setUsername,
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
    getUserInfo,
    checkToken,
    signIn,
    signUp,
    signOut
}
