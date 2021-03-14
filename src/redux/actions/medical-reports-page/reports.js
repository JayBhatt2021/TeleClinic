import axios from 'axios';
import fetchData from "../../../utils/api";
import {
    getDoctorName,
    getPatientName,
    getReportDate,
    getReportFile,
    getReportName
} from "../../selectors/medical-reports-page/reports";

const SHOW_DIALOG_BOX = 'SHOW_DIALOG_BOX';
const showDialogBox = () => {
    return {
        type: SHOW_DIALOG_BOX
    }
};

const SHOW_REPORTS_LIST = 'SHOW_REPORTS_LIST';
const showReportsList = () => {
    return {
        type: SHOW_REPORTS_LIST
    }
};

const SET_REPORT_NAME = 'SET_REPORT_NAME';
const setReportName = reportName => {
    return {
        type: SET_REPORT_NAME,
        payload: reportName
    }
};

const SET_REPORT_DATE = 'SET_REPORT_DATE';
const setReportDate = reportDate => {
    return {
        type: SET_REPORT_DATE,
        payload: reportDate
    }
};

const SET_PATIENT_NAME = 'SET_PATIENT_NAME';
const setPatientName = patientName => {
    return {
        type: SET_PATIENT_NAME,
        payload: patientName
    }
};

const SET_DOCTOR_NAME = 'SET_DOCTOR_NAME';
const setDoctorName = doctorName => {
    return {
        type: SET_DOCTOR_NAME,
        payload: doctorName
    }
};

const SET_REPORT_FILE = 'SET_REPORT_FILE';
const setReportFile = reportFileUrl => {
    return {
        type: SET_REPORT_FILE,
        payload: reportFileUrl
    }
};

const SET_REPORT_LIST = 'SET_REPORT_LIST';
const setReportList = reportList => {
    return {
        type: SET_REPORT_LIST,
        payload: reportList
    }
};

const SET_SEARCH_FIELD = 'SET_SEARCH_FIELD';
const setSearchField = searchField => {
    return {
        type: SET_SEARCH_FIELD,
        payload: searchField
    }
};

function addReport() {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            reportName: getReportName(state),
            reportDate: getReportDate(state),
            patientName: getPatientName(state),
            doctorName: getDoctorName(state)
        };

        const route = '/add-report';

        dispatch(setReportDate(''));
        dispatch(setPatientName(''));
        dispatch(setDoctorName(''));

        return fetchData(route, params)
            .then(() => {
                dispatch(uploadReportFile());
                dispatch(showReportsList());
            })
            .catch(err => {
                console.log(err);
            });
    };
}

function uploadReportFile() {
    return (dispatch, getState) => {
        const state = getState();

        const reportFile = getReportFile(state);
        const data = new FormData();
        data.append('file', reportFile, reportFile.name);

        const route = '/upload-report-file';

        dispatch(setReportFile(null));

        axios.post('https://us-central1-teleclinic-8aa6b.cloudfunctions.net/api' + route, data,
            {headers: {'Authorization': localStorage.getItem("idToken")}})
            .then(res => {
                dispatch(updateReportFileLocation(res.data));
            })
            .catch(err => {
                console.log(err)
            })
    }
}

function updateReportFileLocation(reportFileLocation) {
    return (dispatch, getState) => {
        const state = getState();

        const params = {
            reportName: getReportName(state),
            reportFileUrl: reportFileLocation
        };

        const route = '/update-report-file-location';

        dispatch(setReportName(''));

        return fetchData(route, params)
            .catch(err => {
                console.log(err);
            });
    };
}

function obtainReports() {
    return dispatch => {
        const route = '/obtain-reports';

        return fetchData(route)
            .then(res => {
                dispatch(setReportList(res));
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export {
    SHOW_DIALOG_BOX,
    showDialogBox,
    SHOW_REPORTS_LIST,
    showReportsList,
    SET_REPORT_NAME,
    setReportName,
    SET_REPORT_DATE,
    setReportDate,
    SET_PATIENT_NAME,
    setPatientName,
    SET_DOCTOR_NAME,
    setDoctorName,
    SET_REPORT_FILE,
    setReportFile,
    SET_REPORT_LIST,
    setReportList,
    SET_SEARCH_FIELD,
    setSearchField,
    addReport,
    uploadReportFile,
    updateReportFileLocation,
    obtainReports
}
