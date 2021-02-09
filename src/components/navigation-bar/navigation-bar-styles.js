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
        marginLeft: 10,
        fontFamily: "Trebuchet MS"
    },
    otherPageLogo: {
        height: 75,
        width: 57
    },
    leftSide: {
        marginRight: "auto"
    },
    menuButton: {
        color: "white",
        fontFamily: "Trebuchet MS"
    },
    fullNameTitle: {
        color: "white",
        marginRight: 35,
        fontFamily: "Trebuchet MS"
    },
    divider: {
        background: "white"
    },
    signOutButton: {
        color: "white"
    },
}));
