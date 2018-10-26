const eventfulNormalizer = (res) => {

   function sample(array) {
       return array[Math.floor ( Math.random() * array.length )]
     }

   const arr = res.data.events.tabular.events
   const event = sample(arr)
   const pojo = {"title": event.title, "date": event.rf_start_time, "description": event.description, "id": event.seid}

   //make second request
    return pojo
//image, location

}

export default eventfulNormalizer
