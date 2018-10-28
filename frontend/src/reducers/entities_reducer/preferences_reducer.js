import { RECEIVE_PREFERENCE } from '../../actions/preferences_actions.js';
import merge  from 'lodash/merge'; 

//normalize the array of events that comes in into a hash by ids
const normalizePreference = (preference) => {
    return { 
        [preference._id]: {
        id: preference._id, 
        adult: preference.adult,
        concerts: preference.concerts,
        familyFriendly: preference.familyFriendly, 
        food: preference.food,
        historic: preference.historic, 
        outdoors: preference.outdoors, 
        sports: preference.sports,
        random: preference.random
    }}
}


const preferencesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PREFERENCE:
            let preference = normalizePreference(action.preference);
            let newState = newState = merge({}, state, preference);
            return newState;
        default:
            return state;
    }
};
  

export default preferencesReducer;