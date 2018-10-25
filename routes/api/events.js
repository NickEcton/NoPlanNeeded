const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require('axios');

const Event = require('../../models/Event');
const validateEventInput = require('../../validations/events');

//work on this!
router.get('/test/:id', (req, res) => {
  axios({
    method: 'GET',
    url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&id=${req.params.id}`,
  }).then(response => {
    return res.send(response);
  })
});

router.get('/hiking/:loc1/:loc2', (req, res) => {
  axios({
    method: 'GET',
    url: `https://www.hikingproject.com/data/get-trails?lat=${req.params.loc1}&lon=${req.params.loc2}&key=200376730-1322e2d6ca80c8e55d1a282398106088&maxDistance=200`
  }).then(response => {
    return res.send(response.data);
  })
});

router.get('/tour/:location', (req, res) => {
  axios({
    method: 'GET',
    url: `https://api.izi.travel/mtg/objects/search?form=short&type=tour&includes=location&except=city,country,publisher&languages=en&lat_lon=${req.params.location}&radius=10000&api_key=ff1c5c19-1fd2-4383-a810-3cebbf5819e6`
  }).then(response => {
    return res.send(response.data);
  })
});

router.get('/predict/:location', (req, res) => {
  axios({
    method: 'GET',
    url: `https://api.predicthq.com/v1/events/?limit=5&within=15km@${req.params.location}`,
    headers: {
      Authorization: 'Bearer wEdKqev9Hvs8OxVAzaIhZnqpTfhDjW'
    }
  }).then(response => {
    return res.send(response.data);
  })
});

router.get('/tourImage/:getreq', (req, res) => {
  axios({
    method: 'GET',
    url: `https://api.predicthq.com/v1/events/?limit=5&within=15km@${req.params.location}`,
    headers: {
      Authorization: 'Bearer wEdKqev9Hvs8OxVAzaIhZnqpTfhDjW'
    }
  }).then(response => {
    return res.send(response.data);
  })
});








module.exports = router;






//might need
//////////////////////////////////////////////////////////
// router.get('/', (req, res) => {
//   Event.find()
//     .sort({ date: -1 })
//     .then(events => res.json(events))
//     .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
// });

// router.get('/:id', (req, res) => {
//   Event.findById(req.params.id)
//     .then(event => res.json(event))
//     .catch(err =>
//       res.status(404).json({ noeventfound: 'No event found with that ID' })
//     );
// });

// router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
//     const { errors, isValid } = validateEventInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newEvent = new Event({
//       text: req.body.text,
//       name: req.body.name,
//       user: req.user.id
//     });

//     newEvent.save().then(event => res.json(event));
//   }
// );
