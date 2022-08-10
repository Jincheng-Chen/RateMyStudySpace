const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      default: '',
      required: false,
    },
    spaceId: {
      type: mongoose.Types.ObjectId,
      default: 'spaceID',
      required: true,
    },
    overall: {
      type: Number,
      required: true,

    },
    wifiSpeed: {
      type: Number,
      required: true,

    },
    noise: {
      type: Number,
      required: true,

    },
    bgm: {
      type: Number,
      required: true,
    },
    tableSpace: {
      type: Number,
      required: true,

    },
    timeLimit: {
      type: Number,
      required: true,

    },
    duration: {
      type: Number,
      required: true,
    },
    seatsComfort: {
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
    frequency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Review', reviewSchema);
