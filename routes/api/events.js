const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require('axios');

const Event = require('../../models/Event');
const validateEventInput = require('../../validations/events');

//work on this! 
router.get('/Eventful/:id', (req, res) => {
  axios({
    method: 'GET',
    url: `http://api.eventful.com/json/events/get?app_key=VQSPqhzDdNq9cW4t&id=${req.params.id}`,
  }).then(response => {
    res.send(response.data);
  })
});

router.get('/new/Eventful/:category/:location', (req, res) => {
  debugger
  axios({
    method: 'GET',
    url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&q=${req.params.category}&location=${req.params.location}&date=Today`,
  }).then(response => {
    res.send(response.data) 
  })
})

router.get(`/GooglePlace/:ref`, (req, res) => {
  axios({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&photoreference=${req.params.ref}&maxheight=300`
  }).then(response => {
    res.send(response.data)
  })
})

router.get('/new/GooglePlaces/:type/:location', (req, res) => {
  debugger
  axios({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDYpYUFcyLs-NsGwq7CYkPLFSnGcZ5unp4&location=${req.params.location}&type=${req.params.type}&radius=10000`
  }).then(response => {
    debugger
    res.send(response.data)
  })
})

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