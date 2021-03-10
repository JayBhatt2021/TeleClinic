const getUserId = state => state.user.currentUser.userId;

const getUserEmail = state => state.user.currentUser.email;

const getFullName = state => state.user.currentUser.fullName;

const getUserType = state => state.user.currentUser.userType;

export {
    getUserId,
    getUserEmail,
    getFullName,
    getUserType
};
