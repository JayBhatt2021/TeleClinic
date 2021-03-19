import fetchData from "../../../utils/api";

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

function dummyFunction() {
    return (dispatch, getState) => {
        const state = getState();

        const params = {

        };

        const route = '/add-report';

        return fetchData(route, params)
            .then(() => {

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
    dummyFunction
}
