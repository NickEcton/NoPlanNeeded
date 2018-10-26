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
    concerts: {
      type: Boolean, 
      required: false,
      default: true   
    },
    familyFriendly: {
      type: Boolean, 
      required: false, 
      default: true 
    },
    historic: {
      type: Boolean, 
      required: false, 
      default: true 
    },
    outdoors: {
      type: Boolean, 
      required: false, 
      default: true 
    },
    sports: {
      type: Boolean, 
      required: false, 
      default: true 
    },
    random: {
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