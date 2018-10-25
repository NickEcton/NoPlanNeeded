import {  RECEIVE_EVENTFUL,
          RECEIVE_GOOGLE,
          RECEIVE_EVENTFUL_IMAGE,
          RECEIVE_GOOGLE_IMAGE,
          RECEIVE_HIKING,
          RECEIVE_TOUR,
          RECEIVE_TOUR_IMAGE,
          RECEIVE_EVENT } from '../actions/event_action.js'
          
import eventfulNormalizer from '../components/normalizers/eventfulNormalizer.js'
import googleNormalizer from '../components/normalizers/googleNormalizer.js'
import hikingNormalizer from '../components/normalizers/hikingNormalizer.js'
import predictNormalizer from '../components/normalizers/predictNormalizer.js'
import tourNormalizer from '../components/normalizers/tourNormalizer.js'

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
        case RECEIVE_HIKING:
            return Object.assign({}, oldState, {event: hikingNormalizer(action.events)})
        case RECEIVE_TOUR:
            return Object.assign({}, oldState, {event: tourNormalizer(action.events)})
        case RECEIVE_TOUR_IMAGE:
            return Object.assign({}, oldState, {[oldState.event.image]: action.image})
        case RECEIVE_EVENT:
            return Object.assign({}, oldState, {event: predictNormalizer(action.events)})
        default:
            return oldState
    }
}
