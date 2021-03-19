import {
    makeStyles
} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    accordionHeading: {
        fontSize: theme.typography.pxToRem(30),
        fontWeight: theme.typography.fontWeightRegular
    },
    searchBar: {
        width: '50%',
    },
    cardContainer: {
        minWidth: 500,
        maxHeight: 410,
        padding: 30
    },
    cardTitle: {
        marginBottom: 20
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
    reportFileField: {
        marginTop: 25,
        marginBottom: 25
    },
    reportFileButton: {
        marginRight: 10
    }
}));
