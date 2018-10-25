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
  debugger
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
    let loc1 = location[0]
    let loc2 = location[1]
    return (
    axios({
        method: 'GET',
        url: `api/events/predict/${location}`,
        headers: {
        Authorization: 'Bearer wEdKqev9Hvs8OxVAzaIhZnqpTfhDjW'
        }
    }).then(res => console.log(res))
    )
}
   
export const receiveTourImage = (img_get_req) => (
axios({
    method: 'GET',
    url: `/tourImage/${img_get_req}`
})
)
