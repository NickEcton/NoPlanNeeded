const axios = require('axios');

// Make a request for a user with a given ID
export const receiveEventfulImage = (id) => {
 
  return (
    axios({
      method: 'GET',
      url: `/api/events/Eventful/${id}`
    }))
}

// https://github.com/axios/axios/issues/853


export const receiveEventful = (category, location) => {
  
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

// export const receiveHiking = (location) => (
//     $.ajax({
//       method: 'GET',
//       url: `https://www.hikingproject.com/data/get-trails?lat=${location[0]}&long=${location[1]}&key=200376730-1322e2d6ca80c8e55d1a282398106088&maxDistance=200`
//     })
//    )

//    export const receiveTour = (location) => (
//     $.ajax({
//       method: 'GET',
//       url: `https://api.izi.travel/mtg/objects/search?form=short&type=tour&includes=location&except=city,country,publisher&languages=en&lat_lon=${location[0]},${location[1]}&radius=10000&api_key=ff1c5c19-1fd2-4383-a810-3cebbf5819e6`
//     })
//    )

//    export const receiveTourImage = (img_get_req) => (
//     $.ajax({
//       method: 'GET',
//       url: img_get_req
//     })
//    )

//    export const receiveEvent = (location) => (
//     $.ajax({
//       method: 'GET',
//       url: `https://api.predicthq.com/v1/events/?limit=5&within=15km@${location[0]},${location[1]}`
//     })
//    )



//testing axios
// export const receiveImage = (id) => {
//     axios
//       .get(`http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&id=${id}`, id)
//     //   .then(res => {
//     //     dispatch(receiveCurrentImage(res.data));
//     //   })
//   };
