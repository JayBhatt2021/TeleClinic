import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    RadioGroup,
    Radio,
    FormControlLabel,
    Grid
} from '@material-ui/core';
import React from 'react';
import {PATIENT_TYPE, DOCTOR_TYPE, ADMINISTRATOR_TYPE} from '../../utils/constantList';
import {setUserType} from '../../redux/actions/sign-in-page/sign-in-authorization';
import {getErrors, getIsShowingErrors} from '../../redux/selectors/sign-in-page/sign-in-authorization';

const UserTypeRadioButtons = ({setUserType, errors, isShowingErrors}) => {
    const showError = isShowingErrors && errors.userType !== false;

    return (
        <RadioGroup>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <p className={(showError ? 'field-error' : 'user-type')}>Affiliation* </p>
                <FormControlLabel value='Patient' control={<Radio/>} label='Patient'
                                  onClick={() => setUserType(PATIENT_TYPE)}/>
                <FormControlLabel value='Doctor' control={<Radio/>} label='Doctor'
                                  onClick={() => setUserType(DOCTOR_TYPE)}/>
                <FormControlLabel value='Administrator' control={<Radio/>} label='Administrator'
                                  onClick={() => setUserType(ADMINISTRATOR_TYPE)}/>
            </Grid>
        </RadioGroup>
    )
};

UserTypeRadioButtons.propTypes = {
    setUserType: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    isShowingErrors: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    errors: getErrors(state),
    isShowingErrors: getIsShowingErrors(state)
});

const mapDispatchToProps = dispatch => ({
    setUserType: type => dispatch(setUserType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTypeRadioButtons);
