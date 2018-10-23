import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/nav_bar.css'
import npnlogo from '../../images/npn-logo-3.1.png'
import menuicon from '../../images/npn-menu-icon.png'

export default ({ currentUser }) => {
    if  (true) {
        return(
            <div className='nav-bar-div'>
                <img className='nav-logo' src={npnlogo} alt='npn logo'/>
                <div className='drop-down'>
                    <img className='menu-icon' src={menuicon} alt='menu icon'/>
                    <div className='drop-down-content'>
                        <h1>Account</h1>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
        <div className='nav-bar-div'>
            <img className='nav-logo' src={npnlogo} alt='npn logo' />
            <div className='login-signup'>
                <h1>Login</h1> 
                <h1>Signup</h1>
            </div>
        </div>
        );
    }
}