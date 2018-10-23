import React from 'react';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container.js';
import SignupFormContainer from './session_form/signup_form_container.js';
//in this file, we will putting in the modals and the routes

const Root = () => {
    return(
    <div>
        <h1> Hello world!!!!!!!!</h1>
        <Switch>
            <Route exact path = "/login" component={LoginFormContainer} />
            <Route exact path = "/signup" component={SignupFormContainer} />
        </Switch>
    </div>

    );
}

export default Root;