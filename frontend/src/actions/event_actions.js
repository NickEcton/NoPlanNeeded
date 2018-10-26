import * as ApiUtil from '../util/api/events.js'
import googleNormalizer from '../components/normalizers/googleNormalizer.js'
import eventfulNormalizer from '../components/normalizers/eventfulNormalizer.js';
import tourNormalizer from '../components/normalizers/tourNormalizer.js';
import hikingNormalizer from '../components/normalizers/hikingNormalizer.js';
import predictNormalizer from '../components/normalizers/predictNormalizer.js';


export const RECEIVE_ONE_EVENT = 'RECEIVE_ONE_EVENT'

const receiveOneEvent = (event) => ({
    type: RECEIVE_ONE_EVENT,
    event
})

export const pickRandomEvent = (pojo) => {
    let arr = []
    if (pojo.category === null) {
        arr = [
            receiveHiking(pojo.location),
            receiveTour(pojo.location),
            receiveEvent(pojo.location)
        ]
    }
    
    arr = [
        receiveGooglePlaces(pojo.location, pojo.category),
        receiveEventful(pojo.location, pojo.category),
        receiveHiking(pojo.location),
        receiveTour(pojo.location),
        receiveEvent(pojo.location)
    ]

    return arr[[Math.floor ( Math.random() * arr.length )]]
}

export const receiveGooglePlaces = (location, category) => dispatch => {
    
    return ApiUtil.receiveGooglePlaces(category, location).then((res) => { 
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


export const receiveEventful = (location, category) => dispatch => {
    
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

        let pojo = hikingNormalizer(res)

        dispatch(receiveOneEvent(pojo))    
})}
   
export const receiveTour = (location) => dispatch => {
    
    
    return ApiUtil.receiveTour(location).then((res) => {
        
        let pojo = tourNormalizer(res)
        

        if (pojo.pic_cp) {
            
            ApiUtil.receiveTourImage(pojo.pic_cp, pojo.pic_uuid).then((res) => {
                
                pojo["picture"] = res
                
                dispatch(receiveOneEvent(pojo))
            })

        } else {
            dispatch(receiveOneEvent(pojo))
        }

    })
}


export const receiveEvent = (location) => dispatch => {
    
    return ApiUtil.receiveEvent(location).then((res) => {
        
        let pojo = predictNormalizer(res)

        dispatch(receiveOneEvent(pojo))
    })
}

