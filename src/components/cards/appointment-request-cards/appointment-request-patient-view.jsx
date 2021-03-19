import React, {useEffect} from 'react';
import './_style.css';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

const AppointmentRequestPatientView = ({}) => {
    const classes = useStyles();

    useEffect(() => {

    });

    return (
        <div>
            <Button variant="contained" color="primary">
                Appointment Request Patient View
            </Button>
        </div>
    )
};

AppointmentRequestPatientView.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentRequestPatientView);
