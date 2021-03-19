import {
    SHOW_APPOINTMENT_REQUEST_VIEW,
    SHOW_REQUEST_WINDOW,
} from "../../actions/appointment-request-page/requests";
import {APPOINTMENT_REQUEST_VIEW, REQUEST_WINDOW} from "../../../utils/constantList";

const defaultState = {
    appointmentRequestComponent: APPOINTMENT_REQUEST_VIEW,
};

const requests = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_APPOINTMENT_REQUEST_VIEW:
            return {
                ...state,
                appointmentRequestComponent: APPOINTMENT_REQUEST_VIEW
            };
        case SHOW_REQUEST_WINDOW:
            return {
                ...state,
                appointmentRequestComponent: REQUEST_WINDOW
            };
        default:
            return state;
    }
};

export default requests;
