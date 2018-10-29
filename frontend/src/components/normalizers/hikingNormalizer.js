const hikingNormalizer = (res) => {
  
  const trails = res.data.trails
  const rand_trail = trails[Math.floor(Math.random() * trails.length)];

  const title = rand_trail.name;
  const location = [rand_trail.latitude, rand_trail.longitude];
  const date = new Date().toDateString();
  const picture = rand_trail.imgMedium;
  const description = rand_trail.summary;

  let normalized_trail = {
    title: title,
    location: location,
    eventDate: date,
    picture: picture,
    description: description
  }

  return normalized_trail;
}

export default hikingNormalizer;
