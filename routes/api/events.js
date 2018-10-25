const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require('axios');

const Event = require('../../models/Event');
const validateEventInput = require('../../validations/events');

//create an event when the users 'prefer this event'
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  // debugger;
  //model level validations 
  const { errors, isValid } = validateEventInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  let date = Date(req.body.eventDate);
  //check if the event is already saved
  Event.findOne({ userId: req.user.id , title: req.body.title})
  .then(event => {
    if (event) {
   //if the event is already saved, render an error 
      return res.status(400).json({email: "Event is already saved"})

    //if the event is not saved, it should save to the db
    } else {
        const newEvent = new Event({
              title: req.body.title,
              description: req.body.description,
              location: req.body.location, 
              picture: req.body.picture, 
              eventDate: date,
              userId: req.user.id
        })
      newEvent.save().then(event => res.json(event)).catch(err => console.log(err));;
    }
  }).catch(err => console.log(err));
});

//   //parse the incoming date 
//   let date = Date(req.body.eventDate);


//   //location is now a string, might need to fix 
//   const newEvent = new Event({
//     title: req.body.title,
//     description: req.body.description,
//     location: req.body.location, 
//     picture: req.body.picture, 
//     eventDate: date,
//     userId: req.user.id
//   })
  
//   newEvent.save().then(event => res.json(event));
// }

router.get('/previousEvents', passport.authenticate('jwt', { session: false }), (req, res) => {
  Event.find({userId: req.user.id})
      .sort({ date: -1 })
      .then(events => res.json(events))
      .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
  }
);

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