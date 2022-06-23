import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-final-form";
import { StarRating } from "./StarRating";

// const initalState = {
//   reviewId: 0,
//   starRatings: {
//     wifi: 0,
//     timeLimit: 0,
//     food: 0,
//     service: 0,
//   },
//   questionnire: {
//     timeStayed: 0,
//     taskType: 0,
//     frequency: 0,
//   },
//   comments: "",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };

const ReviewForm = () => {
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <StarRating name="WiFi Speed"></StarRating>
          <StarRating name="Time limit"></StarRating>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Form>
  );
};

export default ReviewForm;
