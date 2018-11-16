import { connect } from "react-redux";

import Greeting from "./greeting";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  };
};

// const mapDispatchToProps = dispatch => {
  
// };

export default connect(
  mapStateToProps,
  null
)(Greeting);
