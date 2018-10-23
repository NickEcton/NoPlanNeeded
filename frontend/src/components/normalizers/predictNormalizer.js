const predictNormalizer = (res) => {
  const events = res.results
  const rand_event = events[Math.floor(Math.random() * events.length)];

  const title = rand_event.title;
  const location = [rand_event.location[1], rand_event.location[0]];
  const date = rand_event.start
  const description = rand_event.description;

  let normalized_event = {
    title: title,
    location: location,
    date: date,
    picture: "not available"
    description: description
  }

  return normalized_event;
}

export default predictNormalizer;
