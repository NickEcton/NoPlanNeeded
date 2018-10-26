const googleNormalizer = (res) => {
debugger
   function sample(array) {
       return array[Math.floor ( Math.random() * array.length )]
     }

   const arr = res.data.results
   const event = sample(arr)
   const pojo = {"title": event.name, "date": null, "description": null,
   "location": [event.geometry.location.lat, event.geometry.location.lng]}
   
   if (event.photos) {
       pojo["photoref"] = event.photos[0].photo_reference
   }
     

     return pojo
}

export default googleNormalizer
