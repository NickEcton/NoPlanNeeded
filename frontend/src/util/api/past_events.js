const axios = require('axios');


export const createPastEvents = (events) => {
  return (
    axios({
      method: 'POST',
      url: `/api/events/create`,
      data: events
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
