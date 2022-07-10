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
      type: String,
      required: false,
    },
    overall: {
      type: Number,
      required: false,

    },
    quietness: {
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
    comment: {
      type: String,
      required: false,

    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Review', reviewSchema);
