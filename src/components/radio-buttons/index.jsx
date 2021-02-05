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
import {getIsShowingErrors, getUserType} from '../../redux/selectors/sign-in-page/sign-in-authorization';
import {indexStyles} from "./index-styles";

const UserTypeRadioButtons = ({setUserType, getUserType, isShowingErrors}) => {
    const classes = indexStyles();

    const showError = isShowingErrors && getUserType === '';

    return (
        <RadioGroup>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <p className={(showError ? classes.root : '')}>
                    Affiliation*
                </p>
                <FormControlLabel value='Patient'
                                  control={<Radio/>}
                                  label='Patient'
                                  onClick={() => setUserType(PATIENT_TYPE)}
                                  className={showError ? classes.root : ''}
                />
                <FormControlLabel value='Doctor'
                                  control={<Radio/>}
                                  label='Doctor'
                                  onClick={() => setUserType(DOCTOR_TYPE)}
                                  className={showError ? classes.root : ''}
                />
                <FormControlLabel value='Administrator'
                                  control={<Radio/>}
                                  label='Administrator'
                                  onClick={() => setUserType(ADMINISTRATOR_TYPE)}
                                  className={showError ? classes.root : ''}
                />
            </Grid>
        </RadioGroup>
    )
};

UserTypeRadioButtons.propTypes = {
    setUserType: PropTypes.func.isRequired,
    getUserType: PropTypes.string.isRequired,
    isShowingErrors: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    getUserType: getUserType(state),
    isShowingErrors: getIsShowingErrors(state)
});

const mapDispatchToProps = dispatch => ({
    setUserType: type => dispatch(setUserType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTypeRadioButtons);
