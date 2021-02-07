import React from 'react';
import './appointment-request-page.css';
import {makeStyles, } from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({

}));

const AppointmentRequestPage = () => {
    return (
        <div>
            To be included (Appointment Requests Page)
        </div>
    );
};

AppointmentRequestPage.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(AppointmentRequestPage);
