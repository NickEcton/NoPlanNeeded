const express = require("express");
const router = express.Router();
const passport = require('passport');
const Preference = require('../../models/Preference');

//creating a preference requires that the person is logged in and there is jwt token 
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newPreference = new Preference({
        userId: req.user.id
    })
    newPreference.save().then(preference => res.json(preference)).catch(err => console.log(err));;
});


//get the preferences 
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
        // debugger;
    Preference.find({userId: req.user.id})
        .then(preferences => res.json(preferences))
        .catch(err => res.status(404).json({ nopreferencesfound: 'No preferences found' }));
});


//edit the preferences 
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // debugger;
Preference.find({userId: req.user.id})
    .then(preferences => res.json(preferences))
    .catch(err => res.status(404).json({ nopreferencesfound: 'No preferences found' }));
});


    //model level validations 
    // const { errors, isValid } = validateEventInput(req.body);
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    
    // Preference.findOne({ userId: req.user.id })
    // .then(preference => {
    //   if (preference) {
    //  //if the event is already saved, render an error 
    //     return res.status(400).json({email: "Event is already saved"})
    //   } else {


        
            
    //         //testing 
    // router.get('/', (req, res) => res.json({msg: 'this is the post route'}))
            
module.exports = router;