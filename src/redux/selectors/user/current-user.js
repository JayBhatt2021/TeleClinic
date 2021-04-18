const getUserId = state => state.user.currentUser.userId;

const getUserEmail = state => state.user.currentUser.email;

const getFullName = state => state.user.currentUser.fullName;

const getUserType = state => state.user.currentUser.userType;

const getUserNotifications = state => state.user.currentUser.notifications;

const getUnreadNotificationsCount = state => state.user.currentUser.newNotificationCount;

export {
    getUserId,
    getUserEmail,
    getFullName,
    getUserType,
    getUserNotifications,
    getUnreadNotificationsCount
};
