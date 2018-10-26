const axios = require('axios');


export const receiveEventfulImage = (id) => {
 
  return (
    axios({
      method: 'GET',
      url: `/api/events/Eventful/${id}`
    }))
}


export const receiveEventful = (category, location) => {
  
    return (
        axios({
        method: "GET",
        url: `/api/events/new/Eventful/${category}/${location}`
        })
    )
}

export const receiveGooglePlaces = (type, location) => {
    
    return (
        axios({
            method: "GET",
            url: `/api/events/new/GooglePlaces/${type}/${location}`
        })
    )
}

export const receiveGoogleImage = (ref) => {
    
    return (
        axios({
            method: "GET",
            url: `/api/events/GooglePlace/${ref}`
        })
    )
}

export const receiveHiking = (location) => {
    
    let loc1 = location[0]
    let loc2 = location[1]
    
    return(
      axios({
        method: 'GET',
        url: `/api/events/hiking/${loc1}/${loc2}`
      })
    )
}
   
export const receiveTour = (location) => {
    
    return (
    axios({
        method: 'GET',
        url: `/api/events/tour/${location}`
    })
    )
}
   
export const receiveEvent = (location) => {
    
    return (
    axios({
        method: 'GET',
        url: `/api/events/predict/${location}`,
        headers: {
        Authorization: 'Bearer wEdKqev9Hvs8OxVAzaIhZnqpTfhDjW'
        }
    })
    )
}
   
export const receiveTourImage = (pic_cp, pic_uuid) => {
    
    return (
        axios({
            method: 'GET',
            url: `/api/events/tour/image/${pic_cp}/${pic_uuid}`
        })
    )
}
