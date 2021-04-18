import React, {useEffect} from 'react';
import './_style.css';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Typography} from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import DeleteIcon from '@material-ui/icons/Delete';
import {getAppointmentList, getPatientSearchField} from "../../../redux/selectors/appointment-request-page/requests";
import {
    setPatientSearchField,
    obtainAppointments,
    showRequestWindow,
    cancelAppointment
} from "../../../redux/actions/appointment-request-page/requests";

const AppointmentRequestAdminView = ({
                                         appointmentList,
                                         searchField,
                                         showRequestWindow,
                                         setSearchField,
                                         cancelAppointment,
                                         obtainAppointments
                                     }) => {
    const classes = useStyles();

    useEffect(() => {
        obtainAppointments();
    });

    return (
        <div>
            <div className="d-flex">
                <SearchBar
                    onChange={e => setSearchField(e)}
                    placeholder="Search Patients"
                    autoFocus
                />
                <Button variant="contained" color="primary" onClick={showRequestWindow}>
                    + Schedule Appointment
                </Button>
            </div>
            <Card className={classes.adminCardContainer}>
                <Typography
                    align="center"
                    variant="h4"
                    className={classes.adminCardTitle}
                >
                    Patient Appointments
                </Typography>
                {
                    appointmentList.length > 0 ?
                        appointmentList.map(appointment => {
                            if (searchField === "" || searchField === appointment.patientName) {
                                return (
                                    <Card className={classes.appointmentCard}>
                                        <Typography variant="h5" className={classes.appointmentCardText}>
                                            Patient: {appointment.patientName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            Doctor: {appointment.doctorName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            Reason for Visit: {appointment.visitReason} &nbsp; &nbsp; &nbsp; &nbsp;
                                            <br/>
                                            <br/>
                                            Appointment Date: {appointment.appointmentDate} &nbsp; &nbsp; &nbsp; &nbsp;
                                            Appointment Time: {appointment.appointmentTime} &nbsp; &nbsp; &nbsp; &nbsp;
                                            <Button
                                                variant="contained"
                                                className={classes.appointmentCardCancelButton}
                                                startIcon={<DeleteIcon/>}
                                                onClick={() => cancelAppointment(appointment.patientName,
                                                    appointment.doctorName, appointment.visitReason,
                                                    appointment.appointmentDate, appointment.appointmentTime)
                                                }
                                            >
                                                Cancel
                                            </Button>
                                        </Typography>
                                    </Card>
                                )
                            } else {
                                return null;
                            }
                        })
                        :
                        <Typography align="center" variant="h5">
                            There are currently no patient appointments in the TeleClinic database.
                            To add one, please press the SCHEDULE APPOINTMENT button.
                        </Typography>
                }
            </Card>
        </div>
    )
};

AppointmentRequestAdminView.propTypes = {
    appointmentList: PropTypes.array.isRequired,
    searchField: PropTypes.string,
    showRequestWindow: PropTypes.func.isRequired,
    setSearchField: PropTypes.func.isRequired,
    cancelAppointment: PropTypes.func.isRequired,
    obtainAppointments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    appointmentList: getAppointmentList(state),
    searchField: getPatientSearchField(state)
});

const mapDispatchToProps = dispatch => ({
    showRequestWindow: () => dispatch(showRequestWindow()),
    setSearchField: searchField => dispatch(setPatientSearchField(searchField)),
    cancelAppointment: (patientName, doctorName, visitReason, appointmentDate, appointmentTime) =>
        dispatch(cancelAppointment(patientName, doctorName, visitReason, appointmentDate, appointmentTime)),
    obtainAppointments: () => dispatch(obtainAppointments())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestAdminView);
