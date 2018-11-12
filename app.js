const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users.js');
const preferences = require('./routes/api/preferences');
const events = require('./routes/api/events.js');
const history = require('./routes/api/history.js');
const path = require('path');

const passport = require('passport');
require('./config/passport')(passport);
//creates an express server
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use(passport.initialize());

const db = require('./config/keys.js').mongoURI;

mongoose
.connect(db, { useNewUrlParser: true })
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

