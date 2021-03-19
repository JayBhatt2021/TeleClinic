import React from 'react';
import './_style.css';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, Grid, TextField, Button, Typography} from '@material-ui/core';

const PatientRequestWindow = ({}) =>
{
    const classes = useStyles();

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
                    />
                </form>
                <TextField id="patientName"
                           label="Patient Name"
                           type="text"
                />
                <TextField id="doctorName"
                           label="Doctor Name"
                           type="text"
                />
                <Button variant="contained" color="primary">
                    Patient Request Window (go back to main view)
                </Button>
            </Grid>
        </Card>
    )
};

PatientRequestWindow.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PatientRequestWindow);
