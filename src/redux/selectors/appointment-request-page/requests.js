const getAppointmentRequestComponent = state => state.appointmentRequestPage.requests.appointmentRequestComponent;

const getPatientName = state => state.appointmentRequestPage.requests.patientName;

const getDoctorName = state => state.appointmentRequestPage.requests.doctorName;

const getVisitReason = state => state.appointmentRequestPage.requests.visitReason;

const getAppointmentDate = state => state.appointmentRequestPage.requests.appointmentDate;

const getAppointmentTime = state => state.appointmentRequestPage.requests.appointmentTime;

const getAppointmentList = state => state.appointmentRequestPage.requests.appointmentList;

const getPatientSearchField = state => state.appointmentRequestPage.requests.patientSearchField;

const getReceiverUserArray = state => state.appointmentRequestPage.requests.receiverUserArray;

export {
    getAppointmentRequestComponent,
    getPatientName,
    getDoctorName,
    getVisitReason,
    getAppointmentDate,
    getAppointmentTime,
    getAppointmentList,
    getPatientSearchField,
    getReceiverUserArray
};
