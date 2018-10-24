const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreferenceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: "users"
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  })


  //preference model 
module.exports = User = mongoose.model('preference', PreferenceSchema);