const tourNormalizer = (res) => {

  const rand_tour = res[Math.floor(Math.random() * res.length)];

  const title = rand_tour.title;
  const location =  [rand_tour.location.latitude, rand_tour.location.longitude];
  const date = new Date().toDateString();

  const pic_cp = rand_tour.content_provider.uuid;
  const pic_uuid = rand_tour.images[0].uuid;
  const pic_size = "_800x600.jpg"
  const pic_get_req = "https://media.izi.travel/".concat(pic_cp).concat("/").concat(pic_uuid).concat(pic_size)

  const picture = pic_get_req;

  const description = rand_tour.category.concat(rand_tour.type);

  let normalized_tour = {
    title: title,
    location: location,
    date: date,
    picture: picture,
    description: description
  }

  return normalized_tour;
}

export default tourNormalizer;
