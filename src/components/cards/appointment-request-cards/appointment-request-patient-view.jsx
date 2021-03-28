import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {showRequestWindow} from "../../../redux/actions/appointment-request-page/requests";

const AppointmentRequestPatientView = ({showRequestWindow}) => {
    const classes = useStyles();

    useEffect(() => {

    });

    return (
        <div>
            <Button variant="contained" color="primary" onClick={showRequestWindow}>
                + Request Appointment
            </Button>
            <Card className={classes.cardContainer}>
                <Typography align="center" variant="h4" className={classes.cardTitle}>Current Appointments</Typography>
                <Card className={classes.appointmentCard}>
                    <Typography variant="h5" className={classes.appointmentCardText}>
                        Name: Hi &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        Doctor: Hi &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        Reason for Visit: Hi &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <br/>
                        Date: Hi &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        Time: Hi
                        <Button
                            variant="contained"
                            className={classes.appointmentCardCancelButton}
                            startIcon={<DeleteIcon />}
                        >
                            Cancel
                        </Button>
                    </Typography>
                </Card>
            </Card>
        </div>
    )
};

AppointmentRequestPatientView.propTypes = {
    showRequestWindow: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    showRequestWindow: () => dispatch(showRequestWindow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestPatientView);
