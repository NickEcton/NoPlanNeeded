import * as ApiUtil from '../util/api/events.js'
import googleNormalizer from '../components/normalizers/googleNormalizer.js'
import eventfulNormalizer from '../components/normalizers/eventfulNormalizer.js';
import tourNormalizer from '../components/normalizers/tourNormalizer.js';
import hikingNormalizer from '../components/normalizers/hikingNormalizer.js';
import predictNormalizer from '../components/normalizers/predictNormalizer.js';
const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI;



export const RECEIVE_ONE_EVENT = 'RECEIVE_ONE_EVENT'

const receiveOneEvent = (event) => ({
    type: RECEIVE_ONE_EVENT,
    event
})

export const pickRandomEvent = (pojo) => {
    //pojo has a location and an array of catgegories
    //build pojo of subarrays
    let options = { "family-friendly": ["amusement_park","bowling_alley","zoo","aquarium","movie_theater","shopping_mall"],
                    "concerts": ["concerts"],
                    "outdoors": ["park", "campground", "hiking", "tour"],
                    "adult": ["bar", "casino", "nightclub", "comedy"],
                    "historic": ["art_gallery", "museum", "library"],
                    "food": ["cafe", "restaurant"],
                    "sports": ["sports"],
                    "random": ["random"]
                }
    
    function sample(array) {
        return array[Math.floor ( Math.random() * array.length )]
        }
        
        

        let category = sample(pojo.categories)
        let choice = sample(options[category])


        if (["concerts", "sports", "comedy"].includes(choice)) {
            return receiveEventful(pojo.location, choice)
        } else if (choice === "tour") {
            return receiveTour(pojo.location)
        } else if (choice === "hiking") {
            return receiveHiking(pojo.location)
        } else if (choice === "random") {
            return receiveEvent(pojo.location)
        } else {
           return receiveGooglePlaces(pojo.location, choice)
        }
        
}

export const receiveGooglePlaces = (location, category) => dispatch => {
    
    return ApiUtil.receiveGooglePlaces(category, location).then((res) => { 
        let pojo = googleNormalizer(res)
            
        if (pojo.photoref) {
            debugger
                pojo["picture"] =`https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&photoreference=${pojo.photoref}&maxheight=300`
                
                dispatch(receiveOneEvent(pojo))
         }

    })
}


export const receiveEventful = (location, category) => dispatch => {
    
    return ApiUtil.receiveEventful(category, location).then((res) => {
        
        let pojo = eventfulNormalizer(res)       
        
        ApiUtil.receiveEventfulImage(pojo.id).then((res) => {
<<<<<<< HEAD
            
            pojo["location"] = [res.data.latitude, res.data.longitude]
=======

            pojo["location"] = [
                parseFloat(res.data.latitude), 
                parseFloat(res.data.longitude)
            ]
>>>>>>> 7a21a75ee6021a0c2eaeb3f6a5a9e016ccbd9ec2
            
            if (res.data.images) {
                pojo["picture"] = res.data.images[0]
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
        
        if (pojo.pic_uuid) {
            
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

