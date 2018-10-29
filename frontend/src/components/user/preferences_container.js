import { connect } from "react-redux";
import Preferences from "./preferences";
import { fetchPreference, editPreference } from '../../actions/preferences_actions.js';

const mapStateToProps = state => {
  return {
    preference: state.entities.preferences
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPreference: () => dispatch(fetchPreference()),
    editPreference: (preference) => dispatch(editPreference(preference))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preferences);
