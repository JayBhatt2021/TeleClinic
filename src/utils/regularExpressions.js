/*
  A strong password must have at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character,
  and must be eight characters in length or longer.
*/
export const hasWeakPassword = str => {
    return !RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})').test(str)
};

/*
  Returns true if string is empty or only contains whitespace
*/
export const isEmptyOrSpaces = str =>{
    return str === null || str.match(/^ *$/) !== null;
};

/*
  Returns true if string has the following characters: ^ # % & * : < > ? / { | }
*/
export const hasInvalidCharacters = str => {
    return !RegExp('^[^#%&*:<>?/{|}]+$').test(str)
};

/*
  Returns true if string has letters only
*/
export const hasLettersOnly = str => RegExp(/^[A-Za-z]+$/).test(str);
