import fetchData from "../../../utils/api";
import {getFullName, getUserId} from "../../selectors/user/current-user";
import {
    getAppointmentDate,
    getAppointmentTime,
    getDoctorName,
    getPatientName,
    getVisitReason,
    getReceiverUserArray
} from "../../selectors/appointment-request-page/requests";
import {searchUser} from "../user/current-user";

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

const SET_PATIENT_SEARCH_FIELD = 'SET_PATIENT_SEARCH_FIELD';
const setPatientSearchField = patientSearchField => {
    return {
        type: SET_PATIENT_SEARCH_FIELD,
        payload: patientSearchField
    }
};

const SET_RECEIVER_USER_ARRAY = 'SET_RECEIVER_USER_ARRAY';
const setReceiverUserArray = receiverUserArray => {
    return {
        type: SET_RECEIVER_USER_ARRAY,
        payload: receiverUserArray
    }
};

function addAppointment() {
    return (dispatch, getState) => {
        const state = getState();

        const doctorName = getDoctorName(state);

        const params = {
            patientName: getPatientName(state),
            doctorName: doctorName,
            visitReason: getVisitReason(state),
            appointmentDate: getAppointmentDate(state),
            appointmentTime: getAppointmentTime(state)
        };

        const route = '/add-appointment';

        dispatch(setVisitReason(''));
        dispatch(setAppointmentDate(''));
        dispatch(setAppointmentTime('8:00 A.M. - 9:00 A.M.'));

        return fetchData(route, params)
            .then(() => {
                dispatch(searchUser());
                dispatch(sendNotification(doctorName));
                dispatch(showAppointmentRequestView());
                dispatch(setPatientName(''));
                dispatch(setDoctorName(''));
            })
            .catch(err => {
                console.log(err);
            });
    };
}

function cancelAppointment(patientName, doctorName, visitReason, appointmentDate, appointmentTime) {
    return () => {
        const params = {
            patientName: patientName,
            doctorName: doctorName,
            visitReason: visitReason,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime
        };

        const route = '/cancel-appointment';

        return fetchData(route, params)
            .catch(err => {
                console.error(err);
            });
    };
}

function obtainAppointments() {
    return dispatch => {
        const route = '/obtain-appointments';

        return fetchData(route)
            .then(res => {
                dispatch(setAppointmentList(res));
            })
            .catch(err => {
                console.error(err);
            });
    };
}

function obtainAppointmentsByUserName() {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            patientName: getFullName(state)
        };

        const route = '/obtain-appointments-by-user-name';

        return fetchData(route, params)
            .then(res => {
                dispatch(setAppointmentList(res));
            })
            .catch(err => {
                console.error(err);
            });
    };
}

function sendNotification(doctorName) {
    return (dispatch, getState) => {
        const state = getState();

        let receiverUserId = 'yn7CVLQ0dIeW2vbQVaBZXQPtyUD3';
        const receiverUserArray = getReceiverUserArray(state);
        const patientName = getPatientName(state);

        // console.log(receiverUserArray);

        receiverUserArray.forEach(function (objectItem) {
            if (objectItem.item.fullName === patientName) {
                // console.log(objectItem.item.fullName);
                // console.log(objectItem.item.uId);
                receiverUserId = objectItem.item.uId;
                // console.log(receiverUserId);
            }
        })

        const params = {
            receiverId: receiverUserId,
            doctorName: doctorName,
            senderId: getUserId(state)
        };

        const route = '/send-notification';

        return fetchData(route, params)
            .catch(err => {
                console.error(err);
            });
    }
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
    SET_PATIENT_SEARCH_FIELD,
    setPatientSearchField,
    SET_RECEIVER_USER_ARRAY,
    setReceiverUserArray,
    addAppointment,
    cancelAppointment,
    obtainAppointments,
    obtainAppointmentsByUserName,
    sendNotification
}
