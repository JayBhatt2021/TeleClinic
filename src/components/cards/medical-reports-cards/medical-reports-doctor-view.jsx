import React, {useEffect} from 'react';
import './_style.css';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Typography, Accordion, AccordionSummary, AccordionDetails, Link} from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {getReportList, getSearchField} from "../../../redux/selectors/medical-reports-page/reports";
import {obtainReports, setSearchField, showDialogBox} from "../../../redux/actions/medical-reports-page/reports";

const MedicalReportsDoctorView = ({reportList, searchField, setSearchField, showDialogBox, obtainReports}) => {
    const classes = useStyles();

    useEffect(() => {
        obtainReports();
    });

    return (
        <div>
            <div className="d-flex">
                <SearchBar
                    onChange={e => setSearchField(e)}
                    placeholder="Search Patients"
                    autoFocus
                    className={classes.searchBar}
                />
                <Button variant="contained" color="primary" onClick={showDialogBox}>
                    Add Report
                </Button>
            </div>
            {
                reportList.length > 0 ?
                    reportList.map(report => {
                        if (searchField === "" || searchField === report.patientName) {
                            return (
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                    >
                                        <Typography
                                            className={classes.accordionHeading}
                                        >
                                            {report.reportName}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="h5">
                                            Report Date: {report.reportDate} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; Patient Name: {report.patientName}
                                            <br/>
                                            <br/>
                                            Doctor Name: {report.doctorName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            <Link onClick={() => window.open(report.reportFileUrl)}>
                                                View Report
                                            </Link>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        } else {
                            return null;
                        }
                    })
                    :
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <Typography
                                className={classes.accordionHeading}
                            >
                                No reports are in the TeleClinic database.
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To add a report, press the ADD REPORT button.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
            }
        </div>
    )
};

MedicalReportsDoctorView.propTypes = {
    reportList: PropTypes.array,
    searchField: PropTypes.string,
    showDialogBox: PropTypes.func.isRequired,
    setSearchField: PropTypes.func.isRequired,
    obtainReports: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    reportList: getReportList(state),
    searchField: getSearchField(state)
});

const mapDispatchToProps = dispatch => ({
    showDialogBox: () => dispatch(showDialogBox()),
    setSearchField: searchField => dispatch(setSearchField(searchField)),
    obtainReports: () => dispatch(obtainReports())
});

export default connect(mapStateToProps, mapDispatchToProps)(MedicalReportsDoctorView);
