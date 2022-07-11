const express = require('express');

const router = express.Router();

const {
  getReviews,
  updateReview,
  addNewReview,
  deleteReview,
  getReviewsByStudySpaceId,
  getReviewsByReviewId,
} = require('../controllers/reviewController');

// GET all the reviews
router.get('/', getReviews);

// POST a new Review to the collection
router.post('/', addNewReview);

// GET reviews by reviewId
router.get('/:reviewID', getReviewsByReviewId);

// DELETE a specific review by id
router.delete('/:reviewID', deleteReview);

// Patch a specific review by id
router.patch('/:reviewID', updateReview);

// Get all the reviews of a specific studySpaceId
router.get('/studySpace/:studySpaceId', getReviewsByStudySpaceId);

module.exports = router;
