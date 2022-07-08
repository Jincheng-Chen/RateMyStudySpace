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
  images: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('StudySpace', studySpaceSchema);
