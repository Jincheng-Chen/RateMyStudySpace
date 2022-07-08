const express = require('express');

const router = express.Router();

const reviewController = require('../controllers/reviewController');

router.get('/:cafeId', reviewController.getReviews);
router.patch('/addNewImage/:reviewId', reviewController.addNewImage);
router.post('/addNewReview', reviewController.addNewReview);
router.delete('/deleteReview/:reviewId', reviewController.deleteReview);

module.exports = router;
