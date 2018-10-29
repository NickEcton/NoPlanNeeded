import { connect } from "react-redux";
import Preferences from "./preferences";
import { fetchPreference, editPreference } from '../../actions/preferences_actions.js';

//need to check amongst the preferences, which preference belongs to the owner
const filterByUsers = (pastPreferenceObj, currentUserId) => {
  let preferenceArray = Object.values(pastPreferenceObj);
  for(let i = 0; i < preferenceArray.length; i++){
    let preference = preferenceArray[i];
    if(preference.userId === currentUserId){
      return preference;
    }
  }
  return {};
}


const mapStateToProps = state => {
  return {
    preference: filterByUsers(state.entities.preferences, state.session.id)
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
