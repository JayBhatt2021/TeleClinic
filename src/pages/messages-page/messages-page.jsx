import React from 'react';
import './messages-page.css';
import {makeStyles, } from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({

}));

const MessagesPage = () => {
    return (
        <div>
            To be included (Messages Page)
        </div>
    );
};

MessagesPage.propTypes = {

};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(MessagesPage);
