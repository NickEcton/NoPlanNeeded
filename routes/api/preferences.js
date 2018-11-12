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


//get the all the preferences 
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Preference.findOne({userId: req.user.id})
        .then(preferences => res.json(preferences))
        .catch(err => res.status(404).json({ nopreferencesfound: 'No preferences found' }));
});


//edit the preferences 
router.patch('/edit', passport.authenticate('jwt', { session: false }), (req, res) => {

    const updatedPreference = {
        userId: req.user.id,
        adult: req.body.adult,
        concerts: req.body.concerts, 
        familyFriendly: req.body.familyFriendly, 
        food: req.body.food,
        historic: req.body.historic,
        outdoors: req.body.outdoors,
        sports: req.body.sports,
        random: req.body.random
    }

    Preference.findOneAndUpdate({userId: req.user.id}, updatedPreference, {new: true})
        .then(preference => res.json(preference))
        .catch(err => res.status(404).json({ nopreferencesfound: 'No preferences found' }));
});
            
module.exports = router;