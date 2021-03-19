// General
export const NONE = 'NONE';
export const EMPTY_REQUIRED_FIELD_MESSAGE = '* Required';
export const ASTERISK_MARKS_REQUIRED_FIELD = '* indicates a required field.';

// Sign-In Page
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const UNVERIFIED_EMAIL = 'UNVERIFIED_EMAIL';
export const VERIFICATION_CODE = 'VERIFICATION_CODE';
export const PATIENT_TYPE = 'PATIENT_TYPE';
export const DOCTOR_TYPE = 'DOCTOR_TYPE';
export const ADMINISTRATOR_TYPE = 'ADMINISTRATOR_TYPE';

// Medical Reports Page
export const DIALOG_BOX = 'DIALOG_BOX';
export const REPORTS_LIST = 'REPORTS_LIST';

// Appointment Request Page
export const APPOINTMENT_REQUEST_VIEW = 'APPOINTMENT_REQUEST_VIEW';
export const REQUEST_WINDOW = 'REQUEST_WINDOW';

// Password Errors
export const WEAK_PASSWORD = 'WEAK_PASSWORD';
export const PASSWORDS_DO_NOT_MATCH = 'PASSWORDS_DO_NOT_MATCH';
export const MINIMUM_PASSWORD_LENGTH = 8;
export const INVALID_PASSWORD_LENGTH = 'INVALID_PASSWORD_LENGTH';

// Other Text Field (Usernames, First Names, etc.) Errors
export const EMPTY_REQUIRED_FIELD = 'EMPTY_REQUIRED_FIELD';
export const LETTERS_ONLY = 'LETTERS_ONLY';
export const INVALID_EMAIL = 'INVALID_EMAIL';
export const SAME_EMAIL = 'SAME_EMAIL';
export const INVALID_VERIFICATION_CODE = 'INVALID_VERIFICATION_CODE';

// Error Messages
export const signInFieldErrors = error => {
    switch (error) {
        case PASSWORDS_DO_NOT_MATCH:
            return PASSWORDS_DO_NOT_MATCH_MESSAGE;
        case LETTERS_ONLY:
            return LETTERS_ONLY_MESSAGE;
        case INVALID_PASSWORD_LENGTH:
            return INVALID_PASSWORD_LENGTH_MESSAGE;
        case WEAK_PASSWORD:
            return WEAK_PASSWORD_MESSAGE;
        case SAME_EMAIL:
            return SAME_EMAIL_MESSAGE;
        case INVALID_EMAIL:
            return INVALID_EMAIL_MESSAGE;
        case INVALID_VERIFICATION_CODE:
            return INVALID_VERIFICATION_CODE_MESSAGE;
        default:
            return '';
    }
};
export const SERVER_ERROR_MESSAGE = 'There was an error.';
export const INVALID_EMAIL_OR_PASSWORD_MESSAGE = 'Invalid email or password';
export const PASSWORDS_DO_NOT_MATCH_MESSAGE = 'The passwords do not match.';
export const LETTERS_ONLY_MESSAGE = 'Only uppercase and lowercase letters are allowed.';
export const INVALID_PASSWORD_LENGTH_MESSAGE = 'Password must be at least ' + MINIMUM_PASSWORD_LENGTH + ' characters.';
export const WEAK_PASSWORD_MESSAGE = 'Requirements: The password must contain at least one lowercase letter, one ' +
    'uppercase letter, one number, and must be eight characters or longer.';
export const INVALID_EMAIL_MESSAGE = 'This email is invalid. Please input a valid email address.';
export const SAME_EMAIL_MESSAGE = 'This email is already in use.';
export const INVALID_VERIFICATION_CODE_MESSAGE = 'This verification code is incorrect. Please try again.';
