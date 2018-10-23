import { connect } from 'react-redux';
import { logoutUser } from '../../util/session_api_util.js';
import NavBar from './nav_bar.jsx';

const mapStateToProps = ({session}) => ({
    currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)