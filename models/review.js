const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: String, default: '', required: false },
  date: { type: Date, default: Date.now(), required: true },
  spaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudySpace',
    required: false,
  },
  overall: {
    type: Number,
    required: false,

  },
  noise: {
    type: Number,
    required: false,

  },
  tableSpace: {
    type: Number,
    required: false,

  },
  timeLimit: {
    type: Number,
    required: false,

  },
  review: {
    type: String,
    required: false,

  },

});

module.exports = mongoose.model('Review', reviewSchema);
