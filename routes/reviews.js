const express = require('express');

const router = express.Router();

const {
  getReviews,
  updateReview,
  addNewImage,
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

// PATCH a new image to the specific review
router.patch('/addNewImage/:reviewId', addNewImage);

module.exports = router;
