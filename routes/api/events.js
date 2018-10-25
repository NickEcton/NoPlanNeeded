const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require('axios');

const Event = require('../../models/Event');
const validateEventInput = require('../../validations/events');

//work on this! 
// router.get('/test/:id', (req, res) => {
//   axios({
//     method: 'GET',
//     url: `http://eventful.com/json/events/?app_key=VQSPqhzDdNq9cW4t&id=${req.params.id}`,
//   }).then(response => {
//     // debugger;
//     return res.send(response);
//   })
// });


router.post('/createEvent', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateEventInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  const newEvent = new Event({
    title: req.event.string,
    description: req.event.description,
    location: req.event.location, 
    picture: req.event.picture, 
    date: req.event.date, 
  })
  
  newEvent.save().then(event => res.json(event));
}
);

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
          
module.exports = router;