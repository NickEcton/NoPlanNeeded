const axios = require('axios');


export const createPastEvents = (pastEvents) => {
  return (
    axios({
      method: 'POST',
      url: `/api/history/create`,
      data: pastEvents
    }))
}


//fetching past events via res.body 
export const fetchPastEvents = () => {
  return (
    axios({
      method: 'GET',
      url: `/api/history`
    }))
}

