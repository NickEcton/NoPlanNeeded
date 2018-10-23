import { RECEIVE_EVENTFUL, RECEIVE_GOOGLE,
     RECEIVE_EVENTFUL_IMAGE, RECEIVE_GOOGLE_IMAGE } from '../actions/event_action.js'
import eventfulNormalizer from '../components/normalizers/eventfulNormalizer.js'
import googleNormalizer from '../components/normalizers/googleNormalizer.js'

export const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_EVENTFUL:
            return Object.assign({}, oldState, {event: eventfulNormalizer(action.events)})
        case RECEIVE_EVENTFUL_IMAGE:
            return Object.assign({}, oldState, {[oldState.event.image]: action.image})
        case RECEIVE_GOOGLE:
            return Object.assign({}, oldState, {event: googleNormalizer(action.events)})
        case RECEIVE_GOOGLE_IMAGE:
            return Object.assign({}, oldState, {[oldState.event.image]: action.image})
        default:
            return oldState
    }
}
