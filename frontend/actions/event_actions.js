export const RECEIVE_EVENTFUL = 'RECEIVE_EVENTFUL'
export const RECEIVE_GOOGLE = 'RECEIVE_GOOGLE'
export const RECEIVE_GOOGLE_IMAGE = 'RECEIVE_GOOGLE_IMAGE'
export const RECEIVE_EVENTFUL_IMAGE = 'RECEIVE_EVENTFUL_IMAGE'
import * as ApiUtil from '../util/api/events.js'


const receiveMultipleEventful = (events) => ({
    type: RECEIVE_EVENTFUL,
    events
})

const receiveTheEventfulImage = (image) => ({
    type: RECEIVE_EVENTFUL_IMAGE,
    image
})

const receiveMultipleGoogle = (events) => ({
    type: RECEIVE_GOOGLE,
    events
})

const receiveTheGoogleImage = (image) => ({
    type: RECEIVE_GOOGLE_IMAGE,
    image
})

export const receiveEventful = (category, location) => dispatch => {
   return ApiUtil.receiveEventful(category, location).then((res) => {
        dispatch(receiveMultipleEventful(res))
    })
}

export const receiveGooglePlaces = (type, location) => dispatch => {
    return ApiUtil.receiveGooglePlaces(type, location).then((res) => {
        dispatch(receiveMultipleGoogle(res))
    })
}

export const receiveEventfulImage = (id) => dispatch => {
    return ApiUtil.receiveEventfulImage(id).then((res) => {
        dispatch(receiveTheEventfulImage(res))
    })
}

export const receiveGoogleImage = (id) => dispatch => {
    return ApiUtil.receiveGoogleImage(id).then((res) => {
        dispatch(receiveTheGoogleImage(res))
    })
}

