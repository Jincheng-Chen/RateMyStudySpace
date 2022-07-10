const express = require('express');

const router = express.Router();

const {
  getReviews,
  addNewImage,
  addNewReview,
  deleteReview,
  getReviewsByStudySpaceId,
  getReviewsByReviewId,
} = require('../controllers/reviewController');

// GET all the reviews
router.get('/', getReviews);

// GET reviews by reviewId
router.get('/:reviewID', getReviewsByReviewId);

// Get all the reviews of a specific studySpaceId
router.get('/studySpace/:studySpaceId', getReviewsByStudySpaceId);

// POST a new Review to the collection
router.post('/', addNewReview);

// PATCH a new image to the specific review
router.patch('/addNewImage/:reviewId', addNewImage);

// DELETE a specific review by id
router.delete('/deleteReview/:reviewId', deleteReview);

module.exports = router;
