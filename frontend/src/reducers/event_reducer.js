import { RECEIVE_ONE_EVENT } from '../actions/event_actions.js'



const eventsReducer = (oldState = {}, action) => {

    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_ONE_EVENT:
            return Object.assign({}, oldState, {event: action.event})
        default:
            return oldState
    }
}

export default eventsReducer
