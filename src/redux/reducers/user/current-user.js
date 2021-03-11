import {
    SET_CURRENT_USER
} from '../../actions/user/current-user';

const defaultState = {
    userId: '',
    email: '',
    fullName: '',
    userType: ''
};

const currentUser = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                userId: action.payload.userId,
                email: action.payload.email,
                fullName: action.payload.fullName,
                userType: action.payload.userType
            };
        default:
            return state;
    }
};

export default currentUser;
