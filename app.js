const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users.js');
const preferences = require('./routes/api/preferences');
const events = require('./routes/api/events.js');
const history = require('./routes/api/history.js');


const passport = require('passport');
require('./config/passport')(passport);
//creates an express server
const app = express();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use(passport.initialize());

const db = require('./config/keys.js').mongoURI;

mongoose
.connect(db)
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));






//basic route to render info 
app.get("/", (req, res) => res.send("Hello World"));


//create a new router, we add a new router to the app

app.use("/api/users", users);
app.use("/api/preferences", preferences);
app.use("/api/events", events);
app.use("/api/history", history);


//work on port 5000 or heroku port 

const port = process.env.PORT || 5000;


//listening to the connection to the port 
app.listen(port, () => console.log(`Server is running on port ${port}`));

