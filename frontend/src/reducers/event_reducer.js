import { RECEIVE_EVENTFUL, RECEIVE_GOOGLE,
     RECEIVE_EVENTFUL_IMAGE, RECEIVE_GOOGLE_IMAGE } from '../actions/event_actions.js'
import eventfulNormalizer from '../components/normalizers/eventfulNormalizer.js'
import googleNormalizer from '../components/normalizers/googleNormalizer.js'

const eventsReducer = (oldState = {}, action) => {
    debugger
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_EVENTFUL:
            return Object.assign({}, oldState, {event: eventfulNormalizer(action.events.data)})
        case RECEIVE_EVENTFUL_IMAGE:
            return Object.assign({}, oldState, Object.assign({}, oldState.event, {image: action.image.data.form_options.captcha.url}))
        case RECEIVE_GOOGLE:
            return Object.assign({}, oldState, {event: googleNormalizer(action.events.data)})
        case RECEIVE_GOOGLE_IMAGE:
            return Object.assign({}, oldState, Object.assign({}, oldState.event, {image: action.image}))
        default:
            return oldState
    }
}

export default eventsReducer
