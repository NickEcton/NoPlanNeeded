const axios = require('axios');


export const createPastEvents = (pastEvents) => {
  return (
    axios({
      method: 'POST',
      url: `/api/events/create`,
      data: pastEvents
    }))
}

export const editPastEvents = (pastEvents) => {
  return (
    axios({
      method: 'GET',
      url: `/api/events/history`
    }))
}
// export const createPastEvents = (events) => {
//     return (
//       axios({
//         method: 'POST',
//         url: `/api/events/create`
//       }))
//   }


//   export const createPastEvents = (events) => {
//     return (
//       axios({
//         method: 'POST',
//         url: `/api/events/create`
//       }))
//   }
