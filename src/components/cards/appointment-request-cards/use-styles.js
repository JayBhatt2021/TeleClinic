import {
    makeStyles
} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    adminCardContainer: {
        minWidth: 1000,
        padding: 10,
        marginTop: 20
    },
    adminCardTitle: {
        marginBottom: 20
    },
    patientCardContainer: {
        minWidth: 1000,
        padding: 20,
        marginTop: 20
    },
    patientCardTitle: {
        marginTop: -10,
        marginBottom: 20
    },
    doctorCardContainer: {
        maxWidth: 850,
        padding: 30,
        marginTop: 20
    },
    doctorImageIcon: {
        marginBottom: 20,
        marginLeft: 345
    },
    appointmentCard: {
        backgroundColor: "dodgerblue",
        padding: 15,
        marginBottom: 20
    },
    appointmentCardText: {
        color: "white"
    },
    appointmentCardCancelButton: {
        backgroundColor: "red",
        color: "white",
        float: "right"
    },
    appointmentCardApproveButton: {
        backgroundColor: "green",
        color: "white",
        float: "right",
        marginRight: 10
    },
    requestCardContainer: {
        minWidth: 500,
        maxHeight: 410,
        padding: 30
    },
    verticalAlign: {
        display: "flex",
        flex: "column",
        flexDirection: "column",
        justifyContent: "center"
    },
    calendarContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: 10,
        paddingBottom: 4,
        justifyContent: "center"
    },
    calendarTextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    submitAppointmentButton: {
        marginTop: 25
    }
}));
