import { RECEIVE_PAST_EVENTS, RECEIVE_ALL_PAST_EVENTS } from '../../actions/past_events_actions.js';
import merge  from 'lodash/merge'; 


const normalizeAllEvents = (events) => {
    let newHash = {}
    for(let i = 0; i < events.length; i++){
        let event = events[i];
        newHash[event._id] = event;
    }
    return newHash;
}


const pastEventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PAST_EVENTS:
            let newState = merge({}, state, {[action.pastEvent.id] : action.payload})
            return newState;
        case RECEIVE_ALL_PAST_EVENTS: 
            let allPrevEvents = normalizeAllEvents(action.pastEvents);
            return merge({}, state, allPrevEvents);
        default:
            return state;
    }
};
  
  export default pastEventsReducer;