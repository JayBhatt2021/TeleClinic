import {
    SET_CURRENT_USER
} from '../../actions/user/current-user';

const defaultState = {
    userId: '',
    userFirstName: '',
    userLastName: ''
};

const currentUser = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                userId: action.payload.userId,
                userFirstName: action.payload.firstName,
                userLastName: action.payload.lastName,
            };
        default:
            return state;
    }
};

export default currentUser;
