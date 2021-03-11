import fetchData from "../../../utils/api";
import {getUserId} from "../../selectors/user/current-user";

const SET_REAL_TIME_USERS = 'SET_REAL_TIME_USERS';
const setRealTimeUsers = realTimeUsers => {
    return {
        type: SET_REAL_TIME_USERS,
        payload: realTimeUsers
    }
};

const SET_REAL_TIME_CONVERSATIONS = 'SET_REAL_TIME_CONVERSATIONS';
const setRealTimeConversations = realTimeConverstations => {
    return {
        type: SET_REAL_TIME_CONVERSATIONS,
        payload: realTimeConverstations
    }
};

function obtainRealTimeUsers(userId) {
    return dispatch => {
        const params = {
            userId: userId,
        };

        const route = '/obtain-real-time-users';

        return fetchData(route, params)
            .then(res => {
                dispatch(setRealTimeUsers(res));
            })
            .catch(err => {
                console.log(err);
            });
    };
}

function updateMessage(messageObject) {
    return dispatch => {
        const params = {
            msgObj: messageObject,
        };

        const route = '/add-message';

        return fetchData(route, params)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    };
}

function obtainRealTimeConversations(receiverUserId) {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            uid_1: getUserId(state),
            uid_2: receiverUserId
        };

        const route = '/obtain-real-time-conversations';

        return fetchData(route, params)
            .then(res => {
                dispatch(setRealTimeConversations(res));
            })
            .catch(err => {
                //console.log(err);
            });
    };
}

export {
    SET_REAL_TIME_USERS,
    setRealTimeUsers,
    SET_REAL_TIME_CONVERSATIONS,
    setRealTimeConversations,
    obtainRealTimeUsers,
    updateMessage,
    obtainRealTimeConversations
}
