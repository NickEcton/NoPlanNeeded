import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/nav_bar.css'
import npnlogo from '../../images/npn-logo-3.1.png'

export default ({ currentUser }) => {
    return (
        <div className='nav-bar-div'>
            <img className='nav-logo' src={npnlogo} alt='npn logo'/>
            <h1>Nav Bar</h1>
        </div>
    );
}