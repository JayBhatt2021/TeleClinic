import React from 'react';
import {useStyles} from './use-styles';
import {connect} from 'react-redux';
import {Card, Typography} from '@material-ui/core';
import doctorIcon from "../../../utils/images/doctorAppointment.png";

const AppointmentRequestDoctorView = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.doctorCardContainer}>
                <img
                    src={doctorIcon}
                    alt="Doctor Icon"
                    className={classes.doctorImageIcon}
                />
                <Typography
                    align="center"
                    variant="h4"
                >
                    The administrators will schedule patient appointments on your behalf.
                </Typography>
                <br/>
                <br/>
                <Typography
                    align="center"
                    variant="h5"
                >
                    Please contact them via the Messages Page if you have any questions or concerns about the
                    appointments of your patients.
                </Typography>
            </Card>
        </div>
    )
};

export default connect(null, null)(AppointmentRequestDoctorView);
