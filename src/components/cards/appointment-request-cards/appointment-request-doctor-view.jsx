import React, {useEffect} from 'react';
import './_style.css';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

const AppointmentRequestDoctorView = ({}) => {
    const classes = useStyles();

    useEffect(() => {

    });

    return (
        <div>
            <Button variant="contained" color="primary">
                Appointment Request Doctor View
            </Button>
        </div>
    )
};

AppointmentRequestDoctorView.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestDoctorView);
