const getUserId = state => state.user.currentUser.userId;

const getFullName = state => state.user.currentUser.fullName;

const getUserType = state => state.user.currentUser.userType;

export {
    getUserId,
    getFullName,
    getUserType
};
