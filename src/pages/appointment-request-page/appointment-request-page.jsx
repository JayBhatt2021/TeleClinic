import React from 'react';
import './appointment-request-page.css';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
    PATIENT_TYPE,
    DOCTOR_TYPE,
    ADMINISTRATOR_TYPE,
    APPOINTMENT_REQUEST_VIEW,
    REQUEST_WINDOW
} from "../../utils/constantList";
import {getUserType} from "../../redux/selectors/user/current-user";
import {getAppointmentRequestComponent} from "../../redux/selectors/appointment-request-page/requests";
import AppointmentRequestPatientView
    from "../../components/cards/appointment-request-cards/appointment-request-patient-view";
import AppointmentRequestDoctorView
    from "../../components/cards/appointment-request-cards/appointment-request-doctor-view";
import PatientRequestWindow from "../../components/cards/appointment-request-cards/patient-request-window";
import DoctorRequestWindow from "../../components/cards/appointment-request-cards/doctor-request-window";
import Spinner from "../../components/spinner";

const AppointmentRequestPage = ({userType, appointmentRequestComponent}) => {
    const currentComponent = () => {
        if (userType === PATIENT_TYPE && appointmentRequestComponent === APPOINTMENT_REQUEST_VIEW) {
            return <AppointmentRequestPatientView/>
        } else if (userType === PATIENT_TYPE && appointmentRequestComponent === REQUEST_WINDOW) {
            return <PatientRequestWindow/>
        } else if ((userType === DOCTOR_TYPE || userType === ADMINISTRATOR_TYPE) &&
            appointmentRequestComponent === APPOINTMENT_REQUEST_VIEW) {
            return <AppointmentRequestDoctorView/>
        } else if ((userType === DOCTOR_TYPE || userType === ADMINISTRATOR_TYPE) &&
            appointmentRequestComponent === REQUEST_WINDOW) {
            return <DoctorRequestWindow/>
        } else {
            return <Spinner/>
        }
    };

    return (
        <div className="body">
            {currentComponent()}
        </div>
    );
};

AppointmentRequestPage.propTypes = {
    userType: PropTypes.string.isRequired,
    appointmentRequestComponent: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    userType: getUserType(state),
    appointmentRequestComponent: getAppointmentRequestComponent(state)
});

export default connect(mapStateToProps, null)(AppointmentRequestPage);
