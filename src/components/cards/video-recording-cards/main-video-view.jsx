import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const MainVideoView = ({}) => {
    const classes = useStyles();

    useEffect(() => {

    });

    return (
        <div>
            Main Video View
        </div>
    )
};

MainVideoView.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainVideoView);
