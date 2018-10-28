const axios = require('axios');




//fetching a user's preferences via res.body 
export const fetchPreference = () => {
    return (
        axios({
            method: 'GET',
            url: `/api/preferences`
        }))
    }
    
export const createPreference = (preference) => {
      return (
        axios({
          method: 'POST',
          url: `/api/preferences/create`,
          data: preference
        }))
    }

export const editPreference = (preference) => {
    return (
      axios({
        method: 'PATCH',
        url: `/api/preferences/edit`,
        data: preference
      }))
}