/* eslint-disable quote-props */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const Review = require('../models/review');

const getReviews = async (req, res) => {
  // get all reviews from DB
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  res.status(200).json(reviews);
};

const getReviewsByReviewId = async (req, res) => {
  const { reviewID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewID)) {
    return res.status(404).json({ error: 'Invalid ID and no such review' });
  }

  const review = await Review.findById(reviewID);

  if (!review) {
    return res.status(404).json({ error: 'Sorry, no such review exist.' });
  }
  res.status(200).json(review);
};

const getReviewsByStudySpaceId = async (req, res) => {
  const { studySpaceId } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(spaceId)) {
  //   return res.status(404).json({ error: 'Invalid ID and no such review' });
  // }

  if (!studySpaceId) {
    return res.status(404).json({
      error: 'Invalid spaceId',
    });
  }

  const review = await Review.find({
    'spaceId': studySpaceId,
  });

  if (!review) {
    return res.status(404).json({ error: 'Sorry, no such review exist.' });
  }
  res.status(200).json(review);
};

const addNewReview = async (req, res) => {
  const {
    user, spaceId, overall, quietness, tableSpace, timeLimit, comment,
  } = req.body;

  // add to DB
  try {
    await Review.create({
      user, quietness, spaceId, overall, tableSpace, timeLimit, comment,
    });
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a recipe
const updateReview = async (req, res) => {
  const { reviewID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewID)) {
    return res
      .status(404)
      .json({ error: 'Invalid ID, no such document exist in DB' });
  }

  const review = await Review.findOneAndUpdate(
    { _id: reviewID },
    {
      ...req.body,
    },
  );
  if (!review) {
    return res.status(404).json({ error: 'No such review' });
  }
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  res.status(200).json(reviews);
};

const deleteReview = async (req, res) => {
  const { reviewID } = req.params;
  if (!mongoose.Types.ObjectId.isValid(reviewID)) {
    return res
      .status(404)
      .json({ error: 'Invalid ID format' });
  }
  const review = await Review.findOneAndDelete({ _id: reviewID });
  if (!review) {
    return res.status(404).json({ error: '404 No such review' });
  }
  res.status(200).json(review);
};

module.exports = {
  getReviews,
  updateReview,
  addNewReview,
  deleteReview,
  getReviewsByStudySpaceId,
  getReviewsByReviewId,
};
