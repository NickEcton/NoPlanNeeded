const googleNormalizer = (res) => {

   function sample(array) {
       return array[Math.floor ( Math.random() * array.length )]
     }

   const arr = res.results
   const event = sample(arr)
   const pojo = {"title": event.name, "date": null, "description": null,
   "location": [event.geometry.location.lat, event.geometry.location.lng]}

   //make second request
   .then(res=> {
       pojo["picture"] = res.images.image.thumb.url
       return pojo
   })


}

export default googleNormalizer
