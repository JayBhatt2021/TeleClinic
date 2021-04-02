import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {getFullName} from "../../../redux/selectors/user/current-user";
import {getAppointmentList} from "../../../redux/selectors/appointment-request-page/requests";
import {
    obtainActualAppointments,
    setPatientName,
    showRequestWindow
} from "../../../redux/actions/appointment-request-page/requests";

const AppointmentRequestPatientView = ({
                                           userName,
                                           appointmentList,
                                           showRequestWindow,
                                           setPatientName,
                                           obtainActualAppointments
                                       }) => {
    const classes = useStyles();

    useEffect(() => {
        obtainActualAppointments();
    });

    const goToPatientRequestWindow = () => {
        setPatientName(userName);
        showRequestWindow();
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => goToPatientRequestWindow()}>
                + Request Appointment
            </Button>
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
                        </Typography>
                }
            </Card>
        </div>
    )
};

AppointmentRequestPatientView.propTypes = {
    userName: PropTypes.string.isRequired,
    appointmentList: PropTypes.array.isRequired,
    showRequestWindow: PropTypes.func.isRequired,
    setPatientName: PropTypes.func.isRequired,
    obtainActualAppointments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userName: getFullName(state),
    appointmentList: getAppointmentList(state)
});

const mapDispatchToProps = dispatch => ({
    showRequestWindow: () => dispatch(showRequestWindow()),
    setPatientName: patientName => dispatch(setPatientName(patientName)),
    obtainActualAppointments: () => dispatch(obtainActualAppointments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestPatientView);
