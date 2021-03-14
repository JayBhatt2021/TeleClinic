const getMedicalReportsComponent = state => state.medicalReportsPage.reports.medicalReportsComponent;

const getReportName = state => state.medicalReportsPage.reports.reportName;

const getReportDate = state => state.medicalReportsPage.reports.reportDate;

const getPatientName = state => state.medicalReportsPage.reports.patientName;

const getDoctorName = state => state.medicalReportsPage.reports.doctorName;

const getReportFile = state => state.medicalReportsPage.reports.reportFile;

const getReportList = state => state.medicalReportsPage.reports.reportList;

const getSearchField = state => state.medicalReportsPage.reports.searchField;

export {
    getMedicalReportsComponent,
    getReportName,
    getReportDate,
    getPatientName,
    getDoctorName,
    getReportFile,
    getReportList,
    getSearchField
};
