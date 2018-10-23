import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/nav_bar.css'
import npnlogo from '../../images/npn-logo-3.1.png'
import menuicon from '../../images/npn-menu-icon.png'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    render() {

        if (this.props.currentUser) {
            return (
                <div className='nav-bar-div'>
                    <img className='nav-logo' src={npnlogo} alt='npn logo' />
                    <h1>{this.props.currentUser}</h1>
                    <div className='drop-down'>
                        <img className='menu-icon' src={menuicon} alt='menu icon' />
                        <div className='drop-down-content'>
                            <ul>
                                <li>
                                    <Link to='/account' >
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/preferences' >
                                        Preferences
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/history' >
                                        Past Events
                                    </Link>
                                </li>
                                <li onClick={this.handleLogout}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='nav-bar-div'>
                    <img className='nav-logo' src={npnlogo} alt='npn logo' />
                    <div className='login-signup'>
                        <Link to='/login' id='login-button'>
                            Login
                </Link>
                        <Link to='/signup' >
                            Sign up
                </Link>
                    </div>
                </div>
            );
        }
    }
}

// export default ({ currentUser }) => {
//     if  (currentUser) {
//         return(
//             <div className='nav-bar-div'>
//                 <img className='nav-logo' src={npnlogo} alt='npn logo' />  
//                 <h1>{currentUser}</h1>
//                 <div className='drop-down'>
//                     <img className='menu-icon' src={menuicon} alt='menu icon'/>
//                     <div className='drop-down-content'>
//                         <ul>
//                             <li>
//                                 <Link to='/account' >
//                                     Account
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to='/preferences' >
//                                     Preferences
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to='/history' >
//                                     Past Events
//                                 </Link>
//                             </li>
//                             <li >
//                                 Logout
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         );
//     } else {
//         return(
//         <div className='nav-bar-div'>
//             <img className='nav-logo' src={npnlogo} alt='npn logo' />
//             <div className='login-signup'>
//                 <Link to='/login' id='login-button'>
//                     Login
//                 </Link>
//                 <Link to='/signup' >
//                     Sign up
//                 </Link>
//             </div>
//         </div>
//         );
//     }
// }