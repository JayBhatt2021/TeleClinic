import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Grid, Typography} from '@material-ui/core';
import NotificationsBell from "../../notifications/notifications-bell";
import DeleteIcon from '@material-ui/icons/Delete';
import {getAppointmentList} from "../../../redux/selectors/appointment-request-page/requests";
import {
    cancelAppointment,
    obtainAppointmentsByUserName
} from "../../../redux/actions/appointment-request-page/requests";

const AppointmentRequestPatientView = ({appointmentList, cancelAppointment, obtainAppointmentsByUserName}) => {
    const classes = useStyles();

    useEffect(() => {
        obtainAppointmentsByUserName();
    });

    return (
        <div>
            <Card className={classes.patientCardContainer}>
                <Grid container justify="flex-end">
                    <NotificationsBell/>
                </Grid>
                <Typography
                    align="center"
                    variant="h4"
                    className={classes.patientCardTitle}
                >
                    Current Appointments
                </Typography>
                {
                    appointmentList.length > 0 ?
                        appointmentList.map(appointment => {
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
    appointmentList: PropTypes.array.isRequired,
    cancelAppointment: PropTypes.func.isRequired,
    obtainAppointmentsByUserName: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    appointmentList: getAppointmentList(state)
});

const mapDispatchToProps = dispatch => ({
    cancelAppointment: (patientName, doctorName, visitReason, appointmentDate, appointmentTime) =>
        dispatch(cancelAppointment(patientName, doctorName, visitReason, appointmentDate, appointmentTime)),
    obtainAppointmentsByUserName: () => dispatch(obtainAppointmentsByUserName())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestPatientView);
