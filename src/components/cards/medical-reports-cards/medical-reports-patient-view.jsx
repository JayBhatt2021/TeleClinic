import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Typography, Accordion, AccordionSummary, AccordionDetails, Link} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {getReportList} from "../../../redux/selectors/medical-reports-page/reports";
import {obtainReportsByUserName} from "../../../redux/actions/medical-reports-page/reports";

const MedicalReportsPatientView = ({reportList, obtainReportsByUserName}) => {
    const classes = useStyles();

    useEffect(() => {
        obtainReportsByUserName();
    });

    return (
        <div>
            {
                reportList.length > 0 ?
                    reportList.map(report => {
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
                    })
                    :
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <Typography
                                className={classes.accordionHeading}
                            >
                                You do not have any medical reports.
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Your doctor or administrator will add one when necessary.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
            }
        </div>
    )
};

MedicalReportsPatientView.propTypes = {
    reportList: PropTypes.array,
    obtainReportsByUserName: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    reportList: getReportList(state)
});

const mapDispatchToProps = dispatch => ({
    obtainReportsByUserName: () => dispatch(obtainReportsByUserName())
});

export default connect(mapStateToProps, mapDispatchToProps)(MedicalReportsPatientView);
