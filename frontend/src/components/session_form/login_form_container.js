import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../util/session_api_util.js';
import SessionForm from './session_form';
import { fetchPreference } from '../../actions/preferences_actions.js';

const mapStateToProps = (state) => {
  debugger
  return {
    // errors: errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">Sign up</Link>,
<<<<<<< HEAD
    // session: this.state.session.id
=======
    session: state.session.id
>>>>>>> origin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
    fetchPreference: () => dispatch(fetchPreference())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);