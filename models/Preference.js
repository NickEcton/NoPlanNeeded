const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//just filler preferences 
const PreferenceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: "users"
    },
    userId: {
      type: String, 
      required: true 
    }, 
    sports: {
      type: Boolean, 
      required: false,
      default: true   
    },
    hiking: {
      type: Boolean, 
      required: false, 
      default: true 
    },
    movies: {
      type: Boolean, 
      required: false, 
      default: true 
    },
    date: {
      type: Date,
      default: Date.now
    }
  })


  //preference model 
module.exports = User = mongoose.model('preference', PreferenceSchema);