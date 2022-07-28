const mongoose = require('mongoose');

const studySpaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'true',
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,

  },
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('StudySpace', studySpaceSchema);
