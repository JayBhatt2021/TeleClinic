import {
    SET_CURRENT_USER,
    SET_NOTIFICATIONS
} from '../../actions/user/current-user';

const defaultState = {
    userId: '',
    email: '',
    fullName: '',
    userType: '',
    notifications: [],
    newNotificationCount: 0
};

const currentUser = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                userId: action.payload.userId,
                email: action.payload.email,
                fullName: action.payload.fullName,
                userType: action.payload.userType,
                notifications: action.payload.notifications.reverse(),
                newNotificationCount: countUnread(action.payload.notifications),
            };
        case SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload.reverse(),
                newNotificationCount: countUnread(action.payload)
            };
        default:
            return state;
    }
};

function countUnread(notifications) {
    let count = 0;
    notifications.forEach(item => {
        if (item.viewedStatus === false) {
            count++;
        }
    });
    return count;
}

export default currentUser;
