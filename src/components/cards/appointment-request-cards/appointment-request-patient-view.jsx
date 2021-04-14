import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {getFullName} from "../../../redux/selectors/user/current-user";
import {getAppointmentList} from "../../../redux/selectors/appointment-request-page/requests";
import {cancelAppointment, obtainAppointments} from "../../../redux/actions/appointment-request-page/requests";

const AppointmentRequestPatientView = ({userName, appointmentList, obtainAppointments, cancelAppointment}) => {
    const classes = useStyles();

    useEffect(() => {
        obtainAppointments();
    });

    return (
        <div>
            <Card className={classes.cardContainer}>
                <Typography align="center" variant="h4" className={classes.cardTitle}>Current Appointments</Typography>
                {
                    appointmentList.length > 0 ?
                        appointmentList.map(appointment => {
                            if (userName === appointment.patientName) {
                                return (
                                    <Card className={classes.appointmentCard}>
                                        <Typography variant="h5" className={classes.appointmentCardText}>
                                            Name: {appointment.patientName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
                            There are currently no upcoming appointments.
                            <br/>
                            Please contact an administrator via the Messages Page to schedule an appointment when
                            necessary.
                        </Typography>
                }
            </Card>
        </div>
    )
};

AppointmentRequestPatientView.propTypes = {
    userName: PropTypes.string.isRequired,
    appointmentList: PropTypes.array.isRequired,
    cancelAppointment: PropTypes.func.isRequired,
    obtainAppointments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userName: getFullName(state),
    appointmentList: getAppointmentList(state)
});

const mapDispatchToProps = dispatch => ({
    cancelAppointment: (patientName, doctorName, visitReason, appointmentDate, appointmentTime) =>
        dispatch(cancelAppointment(patientName, doctorName, visitReason, appointmentDate, appointmentTime)),
    obtainAppointments: () => dispatch(obtainAppointments())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestPatientView);
