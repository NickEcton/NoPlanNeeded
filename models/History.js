const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String, 
    required: true
  },
  description: {
    type: String,
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
  eventDate: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true 
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = History = mongoose.model('history', HistorySchema);