import { connect } from "react-redux";
import Preferences from "./preferences";
import { fetchPreference, editPreference } from '../../actions/preferences_actions.js';
import * as Selector from '../../util/selector';

//need to check amongst the preferences, which preference belongs to the owner
const mapStateToProps = state => {
  return {
    preference: Selector.filterByUser(state.entities.preferences, state.session.id)
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
