import React from 'react';
import './_style.css';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({

}));

const NavigationBar = () => {
    return (
        <nav>

        </nav>
    );
};

NavigationBar.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
