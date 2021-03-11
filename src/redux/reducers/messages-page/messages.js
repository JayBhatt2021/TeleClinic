import {
    SET_REAL_TIME_USERS,
    SET_REAL_TIME_CONVERSATIONS,
} from "../../actions/messages-page/messages";

const defaultState = {
    realTimeUsers: [],
    realTimeConversations: []
};

const messages = (state = defaultState, action) => {
    switch (action.type) {
        case SET_REAL_TIME_USERS:
            return {
                ...state,
                realTimeUsers: action.payload
            };
        case SET_REAL_TIME_CONVERSATIONS:
            return {
                ...state,
                realTimeConversations: action.payload
            };
        default:
            return state;
    }
};

export default messages;
