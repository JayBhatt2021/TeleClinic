import React from 'react';
import './home-page.css';
import {Button, Grid} from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {signOut} from "../../redux/actions/sign-in-page/sign-in-authorization";

const HomePage = ({signOut}) => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <p>Something</p>
                </Grid>
                <Grid item xs={6}>
                    <button>Nothing</button>
                </Grid>
            </Grid>
        </div>
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
