import {
    SHOW_APPOINTMENT_REQUEST_VIEW,
    SHOW_REQUEST_WINDOW,
    SET_PATIENT_NAME,
    SET_DOCTOR_NAME,
    SET_VISIT_REASON,
    SET_APPOINTMENT_DATE,
    SET_APPOINTMENT_TIME,
    SET_APPOINTMENT_LIST,
    SET_PATIENT_SEARCH_FIELD
} from "../../actions/appointment-request-page/requests";
import {APPOINTMENT_REQUEST_VIEW, REQUEST_WINDOW} from "../../../utils/constantList";

const defaultState = {
    appointmentRequestComponent: APPOINTMENT_REQUEST_VIEW,
    patientName: '',
    doctorName: '',
    visitReason: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentList: [],
    patientSearchField: ''
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
        case SET_PATIENT_NAME:
            return {
                ...state,
                patientName: action.payload
            };
        case SET_DOCTOR_NAME:
            return {
                ...state,
                doctorName: action.payload
            };
        case SET_VISIT_REASON:
            return {
                ...state,
                visitReason: action.payload
            };
        case SET_APPOINTMENT_DATE:
            return {
                ...state,
                appointmentDate: action.payload
            };
        case SET_APPOINTMENT_TIME:
            return {
                ...state,
                appointmentTime: action.payload
            };
        case SET_APPOINTMENT_LIST:
            return {
                ...state,
                appointmentList: action.payload
            };
        case SET_PATIENT_SEARCH_FIELD:
            return {
                ...state,
                patientSearchField: action.payload
            };
        default:
            return state;
    }
};

export default requests;
