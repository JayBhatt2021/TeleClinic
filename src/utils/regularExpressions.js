/*
  A strong password must have at least 1 lowercase letter, 1 uppercase letter, 1 number, and must be eight
  characters in length or longer.
*/
export const hasWeakPassword = str => {
    return !RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$').test(str)
};

/*
  Returns true if string is empty or only contains whitespace
*/
export const isEmptyOrSpaces = str =>{
    return str === null || str.match(/^ *$/) !== null;
};

/*
  Returns true if string has letters only
*/
export const hasLettersOnly = str => RegExp(/^[A-Za-z]+$/).test(str);
