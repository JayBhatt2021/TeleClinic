const getUserId = state => state.user.currentUser.userId;

const getUserFirstName = state => state.user.currentUser.userFirstName;

const getUserLastName = state => state.user.currentUser.userLastName;

export {
    getUserId,
    getUserFirstName,
    getUserLastName
};
