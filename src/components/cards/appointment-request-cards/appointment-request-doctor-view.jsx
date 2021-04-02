import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Typography} from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ClearIcon from '@material-ui/icons/Clear';
import {getAppointmentList} from "../../../redux/selectors/appointment-request-page/requests";
import {obtainAppointmentRequests, showRequestWindow} from "../../../redux/actions/appointment-request-page/requests";

const AppointmentRequestDoctorView = ({appointmentRequestsList, showRequestWindow, obtainAppointmentRequests}) => {
    const classes = useStyles();

    useEffect(() => {
        obtainAppointmentRequests();
    });

    return (
        <div>
            <Button variant="contained" color="primary" onClick={showRequestWindow}>
                + Schedule Appointment
            </Button>
            <Card className={classes.cardContainer}>
                <Typography
                    align="center"
                    variant="h4"
                    className={classes.cardTitle}
                >
                    Patient Appointment Requests
                </Typography>
                {
                    appointmentRequestsList.length > 0 ?
                        appointmentRequestsList.map(appointment => {
                            return (
                                <Card className={classes.appointmentCard}>
                                    <Typography variant="h5" className={classes.appointmentCardText}>
                                        Patient: {appointment.patientName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        Doctor: {appointment.doctorName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        Reason for Visit: {appointment.visitReason} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <br/>
                                        <br/>
                                        Appointment Date: {appointment.appointmentDate} &nbsp; &nbsp; &nbsp; &nbsp;
                                        Appointment Time: {appointment.appointmentTime} &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Button
                                            variant="contained"
                                            className={classes.appointmentCardCancelButton}
                                            startIcon={<ClearIcon/>}
                                        >
                                            Deny
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className={classes.appointmentCardApproveButton}
                                            startIcon={<DoneOutlineIcon/>}
                                        >
                                            Approve
                                        </Button>
                                    </Typography>
                                </Card>
                            )
                        })
                        :
                        <Typography align="center" variant="h5">
                            There are currently no patient appointment requests.
                        </Typography>
                }
            </Card>
        </div>
    )
};

AppointmentRequestDoctorView.propTypes = {
    appointmentRequestsList: PropTypes.array.isRequired,
    showRequestWindow: PropTypes.func.isRequired,
    obtainAppointmentRequests: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    appointmentRequestsList: getAppointmentList(state)
});

const mapDispatchToProps = dispatch => ({
    showRequestWindow: () => dispatch(showRequestWindow()),
    obtainAppointmentRequests: () => dispatch(obtainAppointmentRequests())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestDoctorView);
