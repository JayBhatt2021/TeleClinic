import fetchData from "../../../utils/api";
import {
    getAppointmentDate,
    getAppointmentTime,
    getDoctorName,
    getPatientName,
    getVisitReason
} from "../../selectors/appointment-request-page/requests";

const SHOW_APPOINTMENT_REQUEST_VIEW = 'SHOW_APPOINTMENT_REQUEST_VIEW';
const showAppointmentRequestView = () => {
    return {
        type: SHOW_APPOINTMENT_REQUEST_VIEW
    }
};

const SHOW_REQUEST_WINDOW = 'SHOW_REQUEST_WINDOW';
const showRequestWindow = () => {
    return {
        type: SHOW_REQUEST_WINDOW
    }
};

const SET_PATIENT_NAME = 'SET_PATIENT_NAME';
const setPatientName = patientName => {
    return {
        type: SET_PATIENT_NAME,
        payload: patientName
    }
};

const SET_DOCTOR_NAME = 'SET_DOCTOR_NAME';
const setDoctorName = doctorName => {
    return {
        type: SET_DOCTOR_NAME,
        payload: doctorName
    }
};

const SET_VISIT_REASON = 'SET_VISIT_REASON';
const setVisitReason = visitReason => {
    return {
        type: SET_VISIT_REASON,
        payload: visitReason
    }
};

const SET_APPOINTMENT_DATE = 'SET_APPOINTMENT_DATE';
const setAppointmentDate = appointmentDate => {
    return {
        type: SET_APPOINTMENT_DATE,
        payload: appointmentDate
    }
};

const SET_APPOINTMENT_TIME = 'SET_APPOINTMENT_TIME';
const setAppointmentTime = appointmentTime => {
    return {
        type: SET_APPOINTMENT_TIME,
        payload: appointmentTime
    }
};

const SET_APPOINTMENT_LIST = 'SET_APPOINTMENT_LIST';
const setAppointmentList = appointmentList => {
    return {
        type: SET_APPOINTMENT_LIST,
        payload: appointmentList
    }
};

function addAppointmentRequest() {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            patientName: getPatientName(state),
            doctorName: getDoctorName(state),
            visitReason: getVisitReason(state),
            appointmentDate: getAppointmentDate(state),
            appointmentTime: getAppointmentTime(state)
        };

        const route = '/add-appointment-request';

        dispatch(setPatientName(''));
        dispatch(setDoctorName(''));
        dispatch(setVisitReason(''));
        dispatch(setAppointmentDate(''));
        dispatch(setAppointmentTime(''));

        return fetchData(route, params)
            .then(() => {
                dispatch(showAppointmentRequestView());
            })
            .catch(err => {
                console.log(err);
            });
    };
}

function addActualAppointment() {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            patientName: getPatientName(state),
            doctorName: getDoctorName(state),
            visitReason: getVisitReason(state),
            appointmentDate: getAppointmentDate(state),
            appointmentTime: getAppointmentTime(state)
        };

        const route = '/add-actual-appointment';

        dispatch(setPatientName(''));
        dispatch(setDoctorName(''));
        dispatch(setVisitReason(''));
        dispatch(setAppointmentDate(''));
        dispatch(setAppointmentTime(''));

        return fetchData(route, params)
            .then(() => {
                dispatch(showAppointmentRequestView());
            })
            .catch(err => {
                console.log(err);
            });
    };
}

function obtainAppointmentRequests() {
    return dispatch => {
        const route = '/obtain-appointment-requests';

        return fetchData(route)
            .then(res => {
                dispatch(setAppointmentList(res));
            })
            .catch(err => {
                console.log(err);
            });
    };
}

function obtainActualAppointments() {
    return dispatch => {
        const route = '/obtain-actual-appointments';

        return fetchData(route)
            .then(res => {
                dispatch(setAppointmentList(res));
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export {
    SHOW_APPOINTMENT_REQUEST_VIEW,
    showAppointmentRequestView,
    SHOW_REQUEST_WINDOW,
    showRequestWindow,
    SET_PATIENT_NAME,
    setPatientName,
    SET_DOCTOR_NAME,
    setDoctorName,
    SET_VISIT_REASON,
    setVisitReason,
    SET_APPOINTMENT_DATE,
    setAppointmentDate,
    SET_APPOINTMENT_TIME,
    setAppointmentTime,
    SET_APPOINTMENT_LIST,
    setAppointmentList,
    addAppointmentRequest,
    addActualAppointment,
    obtainAppointmentRequests,
    obtainActualAppointments
}
