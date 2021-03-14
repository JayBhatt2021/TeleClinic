import React from 'react';
import './medical-reports-page.css';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {PATIENT_TYPE, DOCTOR_TYPE, ADMINISTRATOR_TYPE, REPORTS_LIST, DIALOG_BOX} from "../../utils/constantList";
import {getUserType} from "../../redux/selectors/user/current-user";
import {getMedicalReportsComponent} from "../../redux/selectors/medical-reports-page/reports";
import MedicalReportsPatientView from "../../components/cards/medical-reports-cards/medical-reports-patient-view";
import MedicalReportsDoctorView from "../../components/cards/medical-reports-cards/medical-reports-doctor-view";
import DoctorDialogBox from "../../components/cards/medical-reports-cards/doctor-dialog-box";
import Spinner from "../../components/spinner";

const MedicalReportsPage = ({userType, medicalReportsComponent}) => {
    const currentComponent = () => {
        if (userType === PATIENT_TYPE) {
            return <MedicalReportsPatientView/>
        } else if ((userType === DOCTOR_TYPE || userType === ADMINISTRATOR_TYPE) &&
            medicalReportsComponent === REPORTS_LIST) {
            return <MedicalReportsDoctorView/>
        } else if ((userType === DOCTOR_TYPE || userType === ADMINISTRATOR_TYPE) &&
            medicalReportsComponent === DIALOG_BOX) {
            return <DoctorDialogBox/>
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

MedicalReportsPage.propTypes = {
    userType: PropTypes.string.isRequired,
    medicalReportsComponent: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    userType: getUserType(state),
    medicalReportsComponent: getMedicalReportsComponent(state)
});

export default connect(mapStateToProps, null)(MedicalReportsPage);
