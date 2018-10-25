const axios = require('axios');

// Make a request for a user with a given ID
export const receiveImage = (id) => {
  return (
    axios({
      method: 'GET',
      url: `/api/events/test/${id}`,
      // headers: ???
    })).then(res => console.log(res))
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



// https://github.com/axios/axios/issues/853


// export const receiveEventful = (category, location) => {
//     return (
//         $.ajax({
//         method: "GET",
//         url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&q=${category}&location=${location[0]},${location[1]}&date=Today`
//         })
//     )
// }

// export const receiveEventfulImage = (id) => {
//     return (
//         $.ajax({
//         method: "GET",
//         url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&id=${id}`
//         })
//     )
// }

// export const receiveGooglePlaces = (type, location) => {
//     return (
//         $.ajax({
//             method: "GET",
//             url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&location=${location[0]},${location[1]}&type=${type}`
//         })
//     )
// }

// export const receiveGoogleImage = (ref) => {
//     return (
//         $.ajax({
//             method: "GET",
//             url: `https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&photoreference=${ref}&maxheight=300`
//         })
//     )
// }










export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export const receiveCurrentImage = id => {
    return {
      type: RECEIVE_IMAGE,
      payload: id
    };
  };
//testing axios
// export const receiveImage = (id) => {
//     axios
//       .get(`http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&id=${id}`, id)
//     //   .then(res => {
//     //     dispatch(receiveCurrentImage(res.data));
//     //   })
//   };
