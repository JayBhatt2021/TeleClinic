const SET_CURRENT_USER = 'SET_CURRENT_USER';
const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
};

export {
    SET_CURRENT_USER,
    setCurrentUser
}
