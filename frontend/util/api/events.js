const receiveEventful = (category, location) => {
    return (
        $.ajax({
        method: "GET",
        url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&q=${category}&location=${location}&date=Today`
        })
    )
}

const receiveEventfulImage = (id) => {
    return (
        $.ajax({
        method: "GET",
        url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&id=${id}`
        })
    )
}

const receiveGooglePlaces = (type, location) => {
    return (
        $.ajax({
            method: "GET",
            url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&location=${location}&type=${type}`
        })
    )
}

const receiveGoogleImage = (ref) => {
    return (
        $.ajax({
            method: "GET",
            url: `https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&photoreference=${ref}&maxheight=300`
        })
    )
}