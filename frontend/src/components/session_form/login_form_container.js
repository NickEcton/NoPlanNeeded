import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../util/session_api_util.js';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  debugger
  return {
    // errors: errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">Sign up</Link>,
    session: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);