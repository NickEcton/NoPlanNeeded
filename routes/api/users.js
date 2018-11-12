const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

const Preference = require('../../models/Preference');
//backend routes 
// adds user routes to /users/current

//protected route to send to the frontend the current user 
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  })

router.post('/register', (req, res) => {
    //verify input 
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
        // if the user already exists, render an error
          return res.status(400).json({email: "A user has already registered with this address"})
        } else {
            //create a new user 
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          })

          const newPreference = new Preference({userId: newUser.id})
          newPreference.save();
          //salt the password (hash)
          //set the password to the salted hash
          //save user and then  

          //preferences are now part of the payload
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                    const payload = {id: user.id, name: user.name, email: user.email, preference: newPreference};
                    //sending to the frontend jwt (servers can vertify integrity of the user)
                    jsonwebtoken.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                        res.json({
                            success: true, 
                            token: 'Bearer ' + token,
                        })
                    })
                })
                .catch(err => console.log(err));
            })
          })
        }
      })
});



router.post('/login', (req, res) => {
    //validations on login 
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
  

    const email = req.body.email; 
    const password = req.body.password; 
    //async call (finding the User)
    User.findOne({email})
        .then(user => {
            if(!user) {
                errors.email = "This user does not exist"
                return res.status(400).json(errors)
                //need to compare password coming with password digest 
            } else {
                //async function 
                bcrypt.compare(password, user.password).then(isMatch => {
                    //if isMatch is true 
                    if (isMatch){
                        //payload is being sent to the front end 
                        //want to send a signed payload to the frontend
                        const payload = {id: user.id, name: user.name, email: user.email, preference: user.preference}
                        //jwt (payload, header, sign) the token to the frontend
                        //jwt(servers can vertify integrity of the user)
                        //specifies how long it will expire in 
                        jsonwebtoken.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                            res.json({
                                success: true, 
                                token: 'Bearer ' + token
                            })
                        })
                    } else {
                        errors.password = "You have entered the wrong password";
                        return res.status(400).json(errors);
                    }
                })
            }
         } )
    }
)



router.get("/test", (req, res) => res.json({ msg: "This is the users route"}));


module.exports = router;