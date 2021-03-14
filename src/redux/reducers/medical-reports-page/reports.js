import {
    SHOW_DIALOG_BOX,
    SHOW_REPORTS_LIST,
    SET_REPORT_NAME,
    SET_REPORT_DATE,
    SET_PATIENT_NAME,
    SET_DOCTOR_NAME,
    SET_REPORT_FILE,
    SET_REPORT_LIST,
    SET_SEARCH_FIELD
} from "../../actions/medical-reports-page/reports";
import {DIALOG_BOX, REPORTS_LIST} from "../../../utils/constantList";

const defaultState = {
    medicalReportsComponent: REPORTS_LIST,
    reportName: '',
    reportDate: '',
    patientName: '',
    doctorName: '',
    reportFile: null,
    reportList: [],
    searchField: ''
};

const reports = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_DIALOG_BOX:
            return {
                ...state,
                medicalReportsComponent: DIALOG_BOX
            };
        case SHOW_REPORTS_LIST:
            return {
                ...state,
                medicalReportsComponent: REPORTS_LIST
            };
        case SET_REPORT_NAME:
            return {
                ...state,
                reportName: action.payload
            };
        case SET_REPORT_DATE:
            return {
                ...state,
                reportDate: action.payload
            };
        case SET_PATIENT_NAME:
            return {
                ...state,
                patientName: action.payload
            };
        case SET_DOCTOR_NAME:
            return {
                ...state,
                doctorName: action.payload
            };
        case SET_REPORT_FILE:
            return {
                ...state,
                reportFile: action.payload
            };
        case SET_REPORT_LIST:
            return {
                ...state,
                reportList: action.payload
            };
        case SET_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            };
        default:
            return state;
    }
};

export default reports;
