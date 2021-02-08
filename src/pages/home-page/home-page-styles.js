import {
    makeStyles,
} from "@material-ui/core";
import Image from "../../utils/images/homePageBackgroundImage.jpg";

export const homePageStyles = makeStyles(theme => ({
    gridContainer: {
        backgroundImage: `url(${Image})`,
        paddingBottom: -10
    },
    imageIcon: {
        height: 250,
        width: 250,
        marginBottom: 20
    },
    buttonPosition: {
        marginTop: 20,
        marginBottom: 20
    }
}));
