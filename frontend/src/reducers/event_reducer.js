// import { RECEIVE_EVENTFUL, RECEIVE_GOOGLE,
//      RECEIVE_EVENTFUL_IMAGE, RECEIVE_GOOGLE_IMAGE } from '../actions/event_actions.js'
import {  RECEIVE_EVENTFUL,
          RECEIVE_GOOGLE,
          RECEIVE_EVENTFUL_IMAGE,
          RECEIVE_GOOGLE_IMAGE,
          RECEIVE_HIKING,
          RECEIVE_TOUR,
          RECEIVE_TOUR_IMAGE,
          RECEIVE_EVENT,
          RECEIVE_ONE_EVENT } from '../actions/event_actions.js'
          

import hikingNormalizer from '../components/normalizers/hikingNormalizer.js'
import predictNormalizer from '../components/normalizers/predictNormalizer.js'
import tourNormalizer from '../components/normalizers/tourNormalizer.js'

const eventsReducer = (oldState = {}, action) => {
<<<<<<< HEAD
    // debugger
=======
    // //debugger
>>>>>>> 047e191d70ae213d0c2ec7d14b320a7ae90d8501
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_EVENTFUL:
            return Object.assign({}, oldState, {event: eventfulNormalizer(action.events.data)})
        case RECEIVE_EVENTFUL_IMAGE:
            return Object.assign({}, oldState, Object.assign(oldState.event, {image: action.image.data.images}))
        case RECEIVE_GOOGLE:
            return Object.assign({}, oldState, {event: googleNormalizer(action.events.data)})
        case RECEIVE_GOOGLE_IMAGE:
            return Object.assign({}, oldState, Object.assign({}, oldState.event, {image: action.image}))
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

export default eventsReducer
