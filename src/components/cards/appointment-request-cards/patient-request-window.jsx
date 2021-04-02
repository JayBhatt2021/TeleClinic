import React from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, Grid, TextField, Button, Typography, FormControl, InputLabel, Select} from '@material-ui/core';
import {getFullName} from "../../../redux/selectors/user/current-user";
import {getAppointmentTime, getVisitReason} from "../../../redux/selectors/appointment-request-page/requests";
import {
    addAppointmentRequest,
    setAppointmentDate,
    setAppointmentTime,
    setDoctorName,
    setVisitReason
} from "../../../redux/actions/appointment-request-page/requests";

const PatientRequestWindow = ({
                                  patientName,
                                  visitReason,
                                  appointmentTime,
                                  setDoctorName,
                                  setVisitReason,
                                  setAppointmentDate,
                                  setAppointmentTime,
                                  addAppointmentRequest
                              }) => {
    const classes = useStyles();

    return (
        <Card className={classes.requestCardContainer}>
            <Typography align="center" variant="h4" className={classes.cardTitle}>Request Appointment Form</Typography>
            <Typography>
                Please fill in the following information:
            </Typography>
            <Grid container justify="space-around" className={classes.verticalAlign}>
                <TextField
                    autoFocus
                    id="patientName"
                    label="Patient Name"
                    value={patientName}
                    disabled={true}
                />
                <TextField
                    id="doctorName"
                    label="Doctor Name"
                    type="text"
                    onChange={e => setDoctorName(e.target.value.trim())}
                    required={true}
                />
                <form className={classes.calendarContainer} noValidate>
                    <TextField
                        id="appointmentDate"
                        label="Appointment Date"
                        type="date"
                        className={classes.calendarTextField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setAppointmentDate(e.target.value.trim())}
                        required={true}
                    />
                </form>
                <FormControl required={true}>
                    <InputLabel htmlFor="appointmentTime">Appointment Time</InputLabel>
                    <Select
                        native
                        value={appointmentTime}
                        onChange={e => setAppointmentTime(e.target.value.trim())}
                        inputProps={{
                            name: 'Appointment Time',
                            id: 'appointmentTime',
                        }}
                    >
                        <option value={"8:00 A.M. - 9:00 A.M."}>8:00 A.M. - 9:00 A.M.</option>
                        <option value={"9:00 A.M. - 10:00 A.M."}>9:00 A.M. - 10:00 A.M.</option>
                        <option value={"10:00 A.M. - 11:00 A.M."}>10:00 A.M. - 11:00 A.M.</option>
                        <option value={"11:00 A.M. - 12:00 P.M."}>11:00 A.M. - 12:00 P.M.</option>
                        <option value={"12:00 P.M. - 1:00 P.M."}>12:00 P.M. - 1:00 P.M.</option>
                        <option value={"1:00 P.M. - 2:00 P.M."}>1:00 P.M. - 2:00 P.M.</option>
                        <option value={"2:00 P.M. - 3:00 P.M."}>2:00 P.M. - 3:00 P.M.</option>
                        <option value={"3:00 P.M. - 4:00 P.M."}>3:00 P.M. - 4:00 P.M.</option>
                        <option value={"4:00 P.M. - 5:00 P.M."}>4:00 P.M. - 5:00 P.M.</option>
                    </Select>
                </FormControl>
                <TextField
                    id="reasonForVisit"
                    label="Reason For Visit"
                    type="text"
                    inputProps={{
                        maxLength: 40
                    }}
                    onChange={e => setVisitReason(e.target.value.trim())}
                    required={true}
                    helperText={`${visitReason.length}/40`}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.submitAppointmentButton}
                    onClick={addAppointmentRequest}
                >
                    Submit Appointment
                </Button>
            </Grid>
        </Card>
    )
};

PatientRequestWindow.propTypes = {
    patientName: PropTypes.string.isRequired,
    visitReason: PropTypes.string,
    appointmentTime: PropTypes.string,
    setDoctorName: PropTypes.func.isRequired,
    setVisitReason: PropTypes.func.isRequired,
    setAppointmentDate: PropTypes.func.isRequired,
    setAppointmentTime: PropTypes.func.isRequired,
    addAppointmentRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    patientName: getFullName(state),
    visitReason: getVisitReason(state),
    appointmentTime: getAppointmentTime(state)
});

const mapDispatchToProps = dispatch => ({
    setDoctorName: doctorName => dispatch(setDoctorName(doctorName)),
    setVisitReason: visitReason => dispatch(setVisitReason(visitReason)),
    setAppointmentDate: appointmentDate => dispatch(setAppointmentDate(appointmentDate)),
    setAppointmentTime: appointmentTime => dispatch(setAppointmentTime(appointmentTime)),
    addAppointmentRequest: () => dispatch(addAppointmentRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientRequestWindow);
