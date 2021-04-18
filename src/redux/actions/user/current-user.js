import fetchData from "../../../utils/api";
import {getUserId} from "../../selectors/user/current-user";
import {getPatientName} from "../../selectors/appointment-request-page/requests";
import {setReceiverUserArray} from "../appointment-request-page/requests";

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
};

const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
const setNotifications = notifications => {
    return {
        type: SET_NOTIFICATIONS,
        payload: notifications
    }
};

function fetchNotifications() {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            userId: getUserId(state)
        };

        const route = '/fetch-notifications';

        return fetchData(route, params)
            .then(res => {
                console.log(res);
                dispatch(setNotifications(res))
            })
    }
}

function viewNotification(id) {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            userId: getUserId(state),
            notificationId: id
        };

        const route = '/view-notification';

        fetchData(route, params)
            .then(() => dispatch(fetchNotifications()))
    }
}

function searchUser() {
    return (dispatch, getState) => {
        const state = getState();

        const searchParameter = getPatientName(state);

        const params = {
            userId: getUserId(state),
            searchParameter: searchParameter
        };

        const route = '/user-search';

        return fetchData(route, params)
            .then(res => {
                    dispatch(setReceiverUserArray(res));
                }
            )
    }
}

export {
    SET_CURRENT_USER,
    setCurrentUser,
    SET_NOTIFICATIONS,
    setNotifications,
    fetchNotifications,
    viewNotification,
    searchUser
}
