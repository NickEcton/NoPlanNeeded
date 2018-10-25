import * as ApiUtil from '../util/api/events.js'
export const RECEIVE_EVENTFUL = 'RECEIVE_EVENTFUL'
export const RECEIVE_GOOGLE = 'RECEIVE_GOOGLE'
export const RECEIVE_GOOGLE_IMAGE = 'RECEIVE_GOOGLE_IMAGE'
export const RECEIVE_EVENTFUL_IMAGE = 'RECEIVE_EVENTFUL_IMAGE'
export const RECEIVE_HIKING = 'RECEIVE_HIKING'
export const RECEIVE_TOUR = 'RECEIVE_TOUR'
export const RECEIVE_TOUR_IMAGE = 'RECEIVE_TOUR_IMAGE'
export const RECEIVE_EVENT = 'RECEIVE_EVENT'



const receiveMultipleEventful = (events) => {
    return ({
        type: RECEIVE_EVENTFUL,
        events
    })
}

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
    debugger
    return ApiUtil.receiveGooglePlaces(type, location).then((res) => {
        dispatch(receiveMultipleGoogle(res))
    })
}

export const receiveEventfulImage = (id) => dispatch => {
    return ApiUtil.receiveEventfulImage(id).then((res) => {
        // debugger
        dispatch(receiveTheEventfulImage(res))
    })
}

export const receiveGoogleImage = (id) => dispatch => {
    return ApiUtil.receiveGoogleImage(id).then((res) => {
        dispatch(receiveTheGoogleImage(res))
    })
}

// export const receiveHiking = (location) => dispatch => {
//     return ApiUtil.receiveHiking(location).then((res) => {
//       dispatch(receiveMultipleHiking(res))
//     })
//    }
   
// export const receiveTour = (location) => dispatch => {
// return ApiUtil.receiveTour(location).then((res) => {
//     dispatch(receiveMultipleTour(res))
// })
// }

// export const receiveTourImage = (img_get_req) => {
// return ApiUtil.receiveTourImage(img_get_req).then((res) => {
//     dispatch(receiveTheTourImage(res))
// })
// }

// export const receiveEvent = (location) => dispatch => {
// return ApiUtil.receiveEvent(location).then((res) => {
//     dispatch(receiveMultipleEvent(res))
// })
// }

