const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateHistoryInput = require('../../validations/history');
const History = require('../../models/History');
//create a past event when the users 'prefer this event'
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
    //model level validations 
    const { errors, isValid } = validateHistoryInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    // let date = Date(req.body.eventDate);
    //check if the event is already saved
  
    //need to parse the location 
    History.findOne({ userId: req.user.id , title: req.body.title})
    .then(event => {
      if (event) {
     //if the event is already saved, render an error 
        return res.status(400).json({email: "Event is already saved"})
      } else {
        const newPastEvent = new History({
              title: req.body.title,
              description: req.body.description,
              location: req.body.location, 
              picture: req.body.picture, 
              eventDate: req.body.eventDate,
              userId: req.user.id
        })
      newPastEvent.save().then(event => res.json(event)).catch(err => console.log(err));;
    }
  }).catch(err => console.log(err));
});
  
//history route
//find the past events that the user selected and sorting them by eventDate
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
History.find({userId: req.user.id})
    .sort({ eventDate: -1 })
    .then(events => { pastEvents = res.json(events)})
    .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
}
);

  
module.exports = router;
