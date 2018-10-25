const eventfulNormalizer = (res) => {
debugger
   function sample(array) {
       return array[Math.floor ( Math.random() * array.length )]
     }

   const arr = res.events.tabular.events
   const event = sample(arr)
   const pojo = {"title": event.title, "date": event.date, "description": event.description, "id": event.seid}

   //make second request
    return pojo
//image, location

}

export default eventfulNormalizer
