const Review = require('../models/review');

const getReviews = (req, res) => {
  console.log(req + res);
};

const addNewImage = (req, res) => {
  console.log(req + res);
};

const addNewReview = (req, res) => {
  const review = JSON.parse(req.body);
  const newReview = new Review(review);

  newReview.save().then((response) => {
    console.log(response);
    res.status(204);
  }).catch((err) => {
    res.status(400).json(err);
  });
};

const deleteReview = (req, res) => {
  console.log(req + res);
};

module.exports = {
  getReviews,
  addNewImage,
  addNewReview,
  deleteReview,
};
