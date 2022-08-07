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
  coordinates: {
    type: { type: String, required: true },
    coordinates: [
      {
        type: Number,
      },
    ],
  },
  images: [
    {
      type: String,
    },
  ],
});
studySpaceSchema.index({ coordinates: '2dsphere' });
module.exports = mongoose.model('StudySpace', studySpaceSchema);
