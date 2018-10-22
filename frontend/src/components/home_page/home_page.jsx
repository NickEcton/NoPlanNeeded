import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/home_page.css'
import npnlogo from '../../images/npn-logo-1.1.png'

export default () => {
    return (
        <div className='home-page-div'>
            <h1>Home Page</h1>
            <img 
                className='event-button'
                src={npnlogo}
                alt='random event button'
            />
        </div>
    );
}