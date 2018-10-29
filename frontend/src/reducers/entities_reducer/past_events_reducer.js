import { RECEIVE_PAST_EVENTS, RECEIVE_ALL_PAST_EVENTS } from '../../actions/past_events_actions.js';
import merge  from 'lodash/merge'; 

//normalize the array of events that comes in into a hash by ids
const normalizeAllEvents = (events) => {
    let newHash = {}
    for(let i = 0; i < events.length; i++){
        let event = events[i];
        newHash[event._id] = {
            id: event._id, 
            title: event.title,
            description: event.description,
            eventDate: event.eventDate, 
            location: event.location,
            picture: event.picture,
        };
    }
    return newHash;
}

const normalizeEvent = (event) => {
    return { 
        [event._id]: {
        id: event._id, 
        title: event.title,
        description: event.description,
        eventDate: event.eventDate, 
        location: event.location,
        picture: event.picture,
    }}
}


const pastEventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PAST_EVENTS:
            let prevEvent = normalizeEvent(action.pastEvent);
            let newState = merge({}, state, prevEvent);
            // let newState = merge({}, state, {[action.pastEvent._id] : action.pastEvent})
            return newState;
        case RECEIVE_ALL_PAST_EVENTS: 
            let allPrevEvents = normalizeAllEvents(action.pastEvents);
            return merge({}, state, allPrevEvents);
        default:
            return state;
    }
};
  
  export default pastEventsReducer;