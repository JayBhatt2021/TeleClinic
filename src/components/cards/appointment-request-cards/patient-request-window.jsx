import React from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, Grid, TextField, Button, Typography} from '@material-ui/core';
import {showAppointmentRequestView} from "../../../redux/actions/appointment-request-page/requests";

const PatientRequestWindow = ({showAppointmentRequestView}) => {
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
                />
                <TextField id="doctorName"
                           label="Doctor Name"
                           type="text"
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
                    />
                </form>
                <form className={classes.calendarContainer} noValidate>
                    <TextField
                        id="appointmentTime"
                        label="Appointment Time"
                        type="time"
                        defaultValue="08:00"
                        className={classes.calendarTextField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </form>
                <TextField id="reasonForVisit"
                           label="Reason For Visit"
                           type="text"
                />
                <Button variant="contained"
                        color="primary"
                        className={classes.submitAppointmentButton}
                        onClick={showAppointmentRequestView}>
                    Submit Appointment
                </Button>
            </Grid>
        </Card>
    )
};

PatientRequestWindow.propTypes = {
    showAppointmentRequestView: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    showAppointmentRequestView: () => dispatch(showAppointmentRequestView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientRequestWindow);
