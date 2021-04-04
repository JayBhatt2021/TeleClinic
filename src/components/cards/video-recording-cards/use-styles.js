import {
    makeStyles
} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    verticalAlign: {
        display: "flex",
        flex: "column",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    cardContainer: {
        minHeight: 505,
        minWidth: 325,
        padding: 10
    },
    cardTitle: {
        marginBottom: 10
    },
    thumbnailButton: {
        marginBottom: 15
    },
    thumbnailIcon: {
        height: 100,
        width: 177.55
    },
    videoUploadButton: {
        marginTop: 20,
        marginBottom: 20
    },
    videoUploadButtonText: {
        color: "white"
    }
}));
