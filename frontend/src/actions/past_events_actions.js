import * as pastEventUtil from '../util/api/past_events.js'


export const RECEIVE_PAST_EVENTS = 'RECEIVE_PAST_EVENTS';
export const RECEIVE_ALL_PAST_EVENTS = 'RECEIVE_ALL_PAST_EVENTS'

const getPastEvents = (pastEvent) => ({
    type: RECEIVE_PAST_EVENTS,
    pastEvent: pastEvent
});


const getAllPastEvents = (pastEvents) => ({
    type: RECEIVE_ALL_PAST_EVENTS,
    pastEvents: pastEvents
});

export const createPastEvents = (pastEvent) => dispatch => {
    // debugger;
    return pastEventUtil.createPastEvents(pastEvent)
        .then(pastEvent => dispatch(getPastEvents(pastEvent.data)))
}

export const fetchPastEvents = () => dispatch => {
    // debugger;
    return pastEventUtil.fetchPastEvents()
        .then(pastEvents => dispatch(getAllPastEvents(pastEvents.data)))
}



