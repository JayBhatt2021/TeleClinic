import {
    makeStyles,
} from "@material-ui/core";

export const navigationBarStyles = makeStyles(theme => ({
    homePageLogo: {
        height: 75,
        width: 57,
        padding: 12
    },
    homePageTitle: {
        color: "white",
        fontSize: 24,
        marginLeft: 10
    },
    otherPageLogo: {
        height: 75,
        width: 57
    },
    leftSide: {
        marginRight: "auto"
    },
    menuButton: {
        color: "white"
    },
    fullNameTitle: {
        color: "white",
        marginRight: 30
    },
    divider: {
        background: "white"
    },
    signOutButton: {
        color: "white"
    },
}));
