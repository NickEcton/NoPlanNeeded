import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container.js';
import SignupFormContainer from './session_form/signup_form_container.js';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
//in this file, we will putting in the modals and the routes
import '../stylesheets/root.css';

import HomePageContainer from './home_page/home_page_container.js';
import NavBarContainer from './nav_bar/nav_bar_container.js';


const Root = () => {
    return(
      <div className='root-div'>
        <NavBarContainer />
        <HomePageContainer />
        <Switch>
            <AuthRoute exact path = "/login" component={LoginFormContainer} />
            <AuthRoute exact path = "/signup" component={SignupFormContainer} />
        </Switch>
      </div>

    );
}

export default Root;