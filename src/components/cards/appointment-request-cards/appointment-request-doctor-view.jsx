import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Typography} from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ClearIcon from '@material-ui/icons/Clear';
import {showRequestWindow} from "../../../redux/actions/appointment-request-page/requests";

const AppointmentRequestDoctorView = ({showRequestWindow}) => {
    const classes = useStyles();

    useEffect(() => {

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
                            startIcon={<ClearIcon />}
                        >
                            Deny
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.appointmentCardApproveButton}
                            startIcon={<DoneOutlineIcon />}
                        >
                            Approve
                        </Button>
                    </Typography>
                </Card>
            </Card>
        </div>
    )
};

AppointmentRequestDoctorView.propTypes = {
    showRequestWindow: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    showRequestWindow: () => dispatch(showRequestWindow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestDoctorView);
