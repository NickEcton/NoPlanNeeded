import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jwt_decode from 'jwt-decode';
import * as APIUtil from './util/session_api_util';
//Components
import configureStore from './store/store';
import App from './App.js';
import { receiveEventful, receiveGooglePlaces, receiveTour} from './actions/event_actions.js'


import { logoutUser, loginUser } from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();


  // Check for token in the window / local storage 
  if (localStorage.jwtToken) {
    // Set auth token header auth
    APIUtil.setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(APIUtil.setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(APIUtil.logoutUser());
      // Redirect to login
      window.location.href = '/login';
    }
  }


  //testing 
  window.store = store; 
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  window.logout = logoutUser;
  window.receiveEventful = receiveEventful
  window.receiveGooglePlaces = receiveGooglePlaces
  window.receiveTour = receiveTour

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});
