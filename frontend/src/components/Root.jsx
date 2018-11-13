import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util.jsx';
//in this file, we will putting in the modals and the routes
import '../stylesheets/root.css';

import Greeting from './greeting/greeting.jsx';
import NavBarContainer from './nav_bar/nav_bar_container.js';
import HomePageContainer from './home_page/home_page_container.js';
import LoginFormContainer from './session_form/login_form_container.js';
import SignupFormContainer from './session_form/signup_form_container.js';
import EventShowContainer from './event_show/event_show_container.js';
import AccountContainer from './user/account_container.js';
import HistoryContainer from './user/history_container.js';
import PreferencesContainer from './user/preferences_container.js';
import AboutContainer from './user/about_container.js';


const Root = () => {
    return(
      <div className='root-div'>
        <Greeting />
        <NavBarContainer />
        <HomePageContainer />
        <Switch>
            <AuthRoute exact path = "/login" component={LoginFormContainer} />
            <AuthRoute exact path = "/signup" component={SignupFormContainer} />
            <Route exact path = "/event" component={EventShowContainer} />
            <Route exact path = "/account" component={AccountContainer} />
            <Route exact path = "/history" component={HistoryContainer} />
            <Route exact path = "/preferences" component={PreferencesContainer} />
            <Route exact path = "/about" component={AboutContainer} />
        </Switch>
      </div>

    );
}

export default Root;
