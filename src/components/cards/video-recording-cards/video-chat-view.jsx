import React, {useEffect} from 'react';
import {useStyles} from './use-styles';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const VideoChatView = ({}) => {
    const classes = useStyles();

    useEffect(() => {

    });

    return (
        <div>
            Video Chat View
        </div>
    )
};

VideoChatView.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(VideoChatView);
