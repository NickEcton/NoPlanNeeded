import * as ApiUtil from '../util/api/events.js'
import googleNormalizer from '../components/normalizers/googleNormalizer.js'
import eventfulNormalizer from '../components/normalizers/eventfulNormalizer.js';
import tourNormalizer from '../components/normalizers/tourNormalizer.js';

export const RECEIVE_HIKING = 'RECEIVE_HIKING'
export const RECEIVE_TOUR = 'RECEIVE_TOUR'
export const RECEIVE_TOUR_IMAGE = 'RECEIVE_TOUR_IMAGE'
export const RECEIVE_EVENT = 'RECEIVE_EVENT'
export const RECEIVE_ONE_EVENT = 'RECEIVE_ONE_EVENT'

const receiveOneEvent = (event) => ({
    type: RECEIVE_ONE_EVENT,
    event
})



export const receiveGooglePlaces = (type, location) => dispatch => {

    return ApiUtil.receiveGooglePlaces(type, location).then((res) => { 
        let pojo = googleNormalizer(res)
        
        if (pojo.photoref) {
        
            ApiUtil.receiveGoogleImage(pojo.photoref).then((res) => {
            
                pojo["photo"] = res
                dispatch(receiveOneEvent(pojo))
            })
        } else {
            dispatch(receiveOneEvent(pojo))
        }
    })
}


export const receiveEventful = (category, location) => dispatch => {
    return ApiUtil.receiveEventful(category, location).then((res) => {
        
        let pojo = eventfulNormalizer(res)       

        ApiUtil.receiveEventfulImage(pojo.id).then((res) => {
            
            if (res.data.images) {
                pojo["images"] = res.data.images[0]
            }
            dispatch(receiveOneEvent(pojo))
        })
     })
 }


export const receiveHiking = (location) => dispatch => {
    return ApiUtil.receiveHiking(location).then((res) => {
       
})}
   
export const receiveTour = (location) => dispatch => {
    
    return ApiUtil.receiveTour(location).then((res) => {
        
        let pojo = tourNormalizer(res)
        

        if (pojo.pic_cp) {
            debugger
            ApiUtil.receiveTourImage(pojo.pic_cp, pojo.pic_uuid).then((res) => {
                debugger
                pojo["picture"] = res
                debugger
                dispatch(receiveOneEvent(pojo))
            })

        } else {
            dispatch(receiveOneEvent(pojo))
        }

    })
}

export const receiveTourImage = (img_get_req) => dispatch => {
    return ApiUtil.receiveTourImage(img_get_req).then((res) => {
        // dispatch(receiveTheTourImage(res))
    })
}

export const receiveEvent = (location) => dispatch => {
    return ApiUtil.receiveEvent(location).then((res) => {
        // dispatch(receiveMultipleEvent(res))
    })
}

