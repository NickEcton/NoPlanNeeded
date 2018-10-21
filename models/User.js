const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  })

//the name of what you call your schemda, second argument
//is the UserSchema 
//we pass in the schema to mongoose.model and it creates a model 
module.exports = User = mongoose.model('user', UserSchema);