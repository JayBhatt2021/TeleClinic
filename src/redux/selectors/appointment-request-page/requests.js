const getAppointmentRequestComponent = state => state.appointmentRequestPage.requests.appointmentRequestComponent;

const getPatientName = state => state.appointmentRequestPage.requests.patientName;

const getDoctorName = state => state.appointmentRequestPage.requests.doctorName;

const getVisitReason = state => state.appointmentRequestPage.requests.visitReason;

const getAppointmentDate = state => state.appointmentRequestPage.requests.appointmentDate;

const getAppointmentTime = state => state.appointmentRequestPage.requests.appointmentTime;

const getAppointmentList = state => state.appointmentRequestPage.requests.appointmentList;

export {
    getAppointmentRequestComponent,
    getPatientName,
    getDoctorName,
    getVisitReason,
    getAppointmentDate,
    getAppointmentTime,
    getAppointmentList
};
