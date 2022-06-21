import React, { useState, useEffect } from "react";

const initalState = {
  reviewId: 0,
  starRatings: {
    wifi: 0,
    timeLimit: 0,
    food: 0,
    service: 0,
  },
  questionnire: {
    timeStayed: 0,
    taskType: 0,
    frequency: 0,
  },
  comments: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

function ReviewForm() {
  const [review, setReview] = useState();

  return <div>ReviewForm</div>;
}

export default ReviewForm;
