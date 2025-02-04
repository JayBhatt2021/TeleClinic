const getSignInComponent = state => state.signInPage.signInAuthorization.signInComponent;

const getFirstName = state => state.signInPage.signInAuthorization.firstName;

const getLastName = state => state.signInPage.signInAuthorization.lastName;

const getUserType = state => state.signInPage.signInAuthorization.userType;

const getEmail = state => state.signInPage.signInAuthorization.email;

const getPassword = state => state.signInPage.signInAuthorization.password;

const getConfirmedPassword = state => state.signInPage.signInAuthorization.confirmedPassword;

const getVerificationCode = state => state.signInPage.signInAuthorization.verificationCode;

const getErrors = state => state.signInPage.signInAuthorization.errors;

const getIsShowingErrors = state => state.signInPage.signInAuthorization.showErrors;

const getLogInError  = state => state.signInPage.signInAuthorization.logInError;

const getIsFetchingSignIn = state => state.signInPage.signInAuthorization.isFetchingSignIn;

const getIsCheckingForToken = state => state.signInPage.signInAuthorization.isCheckingForToken;

export {
    getSignInComponent,
    getFirstName,
    getLastName,
    getUserType,
    getEmail,
    getPassword,
    getConfirmedPassword,
    getVerificationCode,
    getErrors,
    getIsShowingErrors,
    getLogInError,
    getIsFetchingSignIn,
    getIsCheckingForToken
};
