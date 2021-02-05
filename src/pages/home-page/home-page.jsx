import React from 'react';
import './home-page.css';
import {Button, IconButton, makeStyles,} from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {signOut} from "../../redux/actions/sign-in-page/sign-in-authorization";

const useStyles = makeStyles(theme => ({

}));

const HomePage = ({signOut}) => {
    return (
        <nav>
            <Button onClick={signOut}/>
        </nav>
    );
};

HomePage.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
