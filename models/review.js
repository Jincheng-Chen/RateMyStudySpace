const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    user: { type: String, default: '', required: false },
    // spaceId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'StudySpace',
    //   required: false,
    // },
    spaceId: {
      type: mongoose.Types.ObjectId,
      default: 'spaceID',
      required: false,
    },
    overall: {
      type: String,
      required: true,

    },
    wifispeed: {
      type: String,
      required: true,

    },
    noise: {
      type: String,
      required: true,

    },
    bgm: {
      type: String,
      required: true,
    },
    tablespace: {
      type: String,
      required: true,

    },
    timelimit: {
      type: String,
      required: true,

    },
    seatscomfort: {
      type: String,
      required: true,
    },
    recommendation: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
    comments: {
      type: String,
      required: true,

    },
    duration: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Review', reviewSchema);
