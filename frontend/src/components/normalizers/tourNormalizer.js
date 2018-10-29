const tourNormalizer = (res) => {

  const rand_tour = res.data[Math.floor(Math.random() * res.data.length)];

  const title = rand_tour.title;
  const location =  [rand_tour.location.latitude, rand_tour.location.longitude];
  const date = new Date().toDateString();
  let pic_cp = null
  let pic_uuid = null

  if (rand_tour.images) {
    pic_cp = rand_tour.content_provider.uuid;
    pic_uuid = rand_tour.images[0].uuid;
  }



  const description = rand_tour.category.concat(rand_tour.type);

  let normalized_tour = {
    title: title,
    location: location,
    eventDate: date,
    pic_cp: pic_cp,
    pic_uuid: pic_uuid,
    description: description
  }

  return normalized_tour;
}

export default tourNormalizer;
