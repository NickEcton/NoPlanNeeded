import { RECEIVE_PREFERENCE } from '../../actions/preferences_actions.js';
import merge  from 'lodash/merge'; 
// import { RECEIVE_CURRENT_USER } from '../../util/session_api_util.js';

//normalize the array of preferences that comes in through an array 
//preferences are stored by id 
const normalizeBackend = (preference) => {
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


// const normalizePreference = (preference) => {
<<<<<<< HEAD
//     debugger;
=======
>>>>>>> origin
//     return { 
//         [preference.id]: {
//         id: preference.id, 
//         adult: preference.adult,
//         concerts: preference.concerts,
//         familyFriendly: preference.familyFriendly, 
//         food: preference.food,
//         historic: preference.historic, 
//         outdoors: preference.outdoors, 
//         sports: preference.sports,
//         random: preference.random,
//         userId: preference.userId
//     }}
// }


const preferencesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PREFERENCE:
            let preference = normalizeBackend(action.preference);
            let newState = merge({}, state, preference);
            return newState;
        //in the case when the user logins, the preferences should update
        // case RECEIVE_CURRENT_USER: 
        //     debugger;
            // preference = normalizePreference(action.payload.preference);
            // newState = merge({}, state, preference);
            return state;
        default:
            return state;
    }
};
  

export default preferencesReducer;