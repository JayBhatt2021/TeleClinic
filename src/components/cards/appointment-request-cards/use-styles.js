import {
    makeStyles
} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    cardContainer: {
        minWidth: 1000,
        padding: 10,
        marginTop: 20
    },
    cardTitle: {
        marginBottom: 20
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
