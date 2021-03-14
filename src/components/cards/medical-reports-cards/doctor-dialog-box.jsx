import React from 'react';
import './_style.css';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, Grid, TextField, Button, Typography} from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import {
    addReport,
    setDoctorName,
    setPatientName,
    setReportDate,
    setReportFile,
    setReportName,
} from "../../../redux/actions/medical-reports-page/reports";
import {getReportFile} from "../../../redux/selectors/medical-reports-page/reports";

const DoctorDialogBox = ({
                             reportFile,
                             setReportName,
                             setReportDate,
                             setPatientName,
                             setDoctorName,
                             setReportFile,
                             addReport
                         }) =>
{
    const classes = useStyles();

    const reportUploaded = reportFile => reportFile ? <DoneOutlineIcon/> : null;

    return (
        <Card className={classes.cardContainer}>
            <Typography align="center" variant="h4" className={classes.cardTitle}>Add Report Form</Typography>
            <Typography>
                Please fill in the following information:
            </Typography>
            <Grid container justify="space-around" className={classes.verticalAlign}>
                <TextField
                    autoFocus
                    id="reportName"
                    label="Report Name"
                    onChange={e => setReportName(e.target.value.trim())}
                />
                <form className={classes.calendarContainer} noValidate>
                    <TextField
                        id="reportDate"
                        label="Report Date"
                        type="date"
                        className={classes.calendarTextField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setReportDate(e.target.value.trim())}
                    />
                </form>
                <TextField id="patientName"
                           label="Patient Name"
                           type="text"
                           onChange={e => setPatientName(e.target.value.trim())}
                />
                <TextField id="doctorName"
                           label="Doctor Name"
                           type="text"
                           onChange={e => setDoctorName(e.target.value.trim())}
                />
                <Button variant="contained" component="label" className={classes.reportFileField}>
                    <Typography variant="inherit" className={classes.reportFileButton}>
                        Upload Report File
                    </Typography>
                    <input
                        id="reportFile"
                        type="file"
                        name="Report File"
                        accept="application/msword, text/plain, application/pdf"
                        onChange={e => setReportFile(e.target.files[0])}
                        hidden
                    />
                    {reportUploaded(reportFile)}
                </Button>
                <Button variant="contained" color="primary" onClick={addReport}>
                    Add Report
                </Button>
            </Grid>
        </Card>
    )
};

DoctorDialogBox.propTypes = {
    reportFile: PropTypes.any,
    setReportName: PropTypes.func.isRequired,
    setReportDate: PropTypes.func.isRequired,
    setPatientName: PropTypes.func.isRequired,
    setDoctorName: PropTypes.func.isRequired,
    setReportFile: PropTypes.func.isRequired,
    addReport: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    reportFile: getReportFile(state)
});

const mapDispatchToProps = dispatch => ({
    setReportName: reportName => dispatch(setReportName(reportName)),
    setReportDate: reportDate => dispatch(setReportDate(reportDate)),
    setPatientName: patientName => dispatch(setPatientName(patientName)),
    setDoctorName: doctorName => dispatch(setDoctorName(doctorName)),
    setReportFile: reportFile => dispatch(setReportFile(reportFile)),
    addReport: () => dispatch(addReport())
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDialogBox);
