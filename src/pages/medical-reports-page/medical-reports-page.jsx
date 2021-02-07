import React from 'react';
import './medical-reports-page.css';
import {makeStyles, } from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({

}));

const MedicalReportsPage = () => {
    return (
        <div>
            To be included (Medical Reports Page)
        </div>
    );
};

MedicalReportsPage.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(MedicalReportsPage);
