export const receiveEventful = (category, location) => {
    return (
        $.ajax({
        method: "GET",
        url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&q=${category}&location=${location[0]},${location[1]}&date=Today`
        })
    )
}

export const receiveEventfulImage = (id) => {
    return (
        $.ajax({
        method: "GET",
        url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&id=${id}`
        })
    )
}

export const receiveGooglePlaces = (type, location) => {
    return (
        $.ajax({
            method: "GET",
            url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&location=${location[0]},${location[1]}&type=${type}`
        })
    )
}

export const receiveGoogleImage = (ref) => {
    return (
        $.ajax({
            method: "GET",
            url: `https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&photoreference=${ref}&maxheight=300`
        })
    )
}

export const receiveHiking = (location) => (
    $.ajax({
      method: 'GET',
      url: `https://www.hikingproject.com/data/get-trails?lat=${location[0]}&long=${location[1]}&key=200376730-1322e2d6ca80c8e55d1a282398106088&maxDistance=200`
    })
   )
   
   export const receiveTour = (location) => (
    $.ajax({
      method: 'GET',
      url: `https://api.izi.travel/mtg/objects/search?form=short&type=tour&includes=location&except=city,country,publisher&languages=en&lat_lon=${location[0]},${location[1]}&radius=10000&api_key=ff1c5c19-1fd2-4383-a810-3cebbf5819e6`
    })
   )
   
   export const receiveTourImage = (img_get_req) => (
    $.ajax({
      method: 'GET',
      url: img_get_req
    })
   )
   
   export const receiveEvent = (location) => (
    $.ajax({
      method: 'GET',
      url: `https://api.predicthq.com/v1/events/?limit=5&within=15km@${location[0]},${location[1]}`
    })
   )