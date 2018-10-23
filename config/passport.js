//secure RESTful endpoints w/o session 
//authenticate the requests for JWT 
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('user');
const keys = require('../config/keys.js');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

//done can pass the user to the frontend
module.exports = passport => {
    passport.use(new JwtStrategy(options, (payload, done) => {
        User.findById(payload.id)
            .then(user => {
                if (user) {
                    return done(null, user);
                } 
                return done(null, false);
            })
            .catch(err => console.log(err))
    }))
}
