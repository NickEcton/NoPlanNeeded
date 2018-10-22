import React from 'react';

import '../stylesheets/root.css';

import HomePageContainer from './home_page/home_page_container.js';
import NavBarContainer from './nav_bar/nav_bar_container.js';

const Root = () => (
    <div className='root-div'>
        <NavBarContainer />
        <HomePageContainer />
    </div>
)

export default Root;