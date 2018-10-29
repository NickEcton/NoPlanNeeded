import { connect } from 'react-redux';
import Account from './account';

const mapStateToProps = state => {
  return {
    users: state.entities.users,
    session: state.session 
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);