const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String, 

  },
  description: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: [true, "Latitude is required"]
  },
  long: {
    type: Number,
    required: [true, "Longitude is required"]
  },
  picture: {
    type: String, 
    required: false 
  },
  date: {
    type: Date,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = Event = mongoose.model('event', EventSchema);