import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import './_style.css';
const Spinner = () => {
    return (
        <CircularProgress className={'center'} />
    );
};

export default Spinner;
