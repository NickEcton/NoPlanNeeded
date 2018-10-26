const axios = require('axios');


export const receiveEventfulImage = (id) => {
 debugger
  return (
    axios({
      method: 'GET',
      url: `/api/events/Eventful/${id}`
    }))
}


export const receiveEventful = (category, location) => {
  debugger
    return (
        axios({
        method: "GET",
        url: `/api/events/new/Eventful/${category}/${location}`
        })
    )
}

export const receiveGooglePlaces = (type, location) => {
    debugger
    return (
        axios({
            method: "GET",
            url: `/api/events/new/GooglePlaces/${type}/${location}`
        })
    )
}

export const receiveGoogleImage = (ref) => {
    debugger
    return (
        axios({
            method: "GET",
            url: `/api/events/GooglePlace/${ref}`
        })
    )
}

export const receiveHiking = (location) => {
    debugger
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
    debugger
    return (
    axios({
        method: 'GET',
        url: `/api/events/tour/${location}`
    })
    )
}
   
export const receiveEvent = (location) => {
    debugger
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
    debugger
    return (
        axios({
            method: 'GET',
            url: `/api/events/tour/image/${pic_cp}/${pic_uuid}`
        })
    )
}
