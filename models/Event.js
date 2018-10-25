const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String, 
    required: true
  },
  description: {
    //text 
    type: Text,
    required: true
  },
  location: {
    type: Array,
    required: [true, "Latitude is required"]
  },
  picture: {
    type: String, 
    required: true 
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