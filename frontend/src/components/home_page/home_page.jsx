import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/home_page.css'
import npnlogo from '../../images/npn-logo-1.1.png'


class HomePage extends React.Component {
  
	render() {

		return (
      <div className='home-page-div'>
        <Link to='/event'>
          <img className='event-button' src={npnlogo}
            alt='random event button'
          />
        </Link>
      </div>
		);
	}
}

export default HomePage;