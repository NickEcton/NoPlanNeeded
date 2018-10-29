import { RECEIVE_PREFERENCE } from '../../actions/preferences_actions.js';
import merge  from 'lodash/merge'; 

//normalize the array of preferences that comes in through an array 
//preferences are stored by id 
const normalizePreference = (preference) => {
    // debugger;
    // preference = preference[0]
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
        random: preference.random,
        userId: preference.userId
    }}
}


const preferencesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PREFERENCE:
            // debugger;
            let preference = normalizePreference(action.preference);
            let newState = merge({}, state, preference);
            return newState;
        default:
            return state;
    }
};
  

export default preferencesReducer;