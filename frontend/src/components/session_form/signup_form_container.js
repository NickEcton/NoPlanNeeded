import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../util/session_api_util.js';
import { createPreference } from '../../actions/preferences_actions.js';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    formType: 'Sign up',
    navLink: <Link to="/login">Log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(registerUser(user)),
    createPreference: () => dispatch(createPreference())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);