import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import './spinner.css';
const Spinner = () => {
    return (
        <CircularProgress className={'center'} />
    );
};

export default Spinner;
