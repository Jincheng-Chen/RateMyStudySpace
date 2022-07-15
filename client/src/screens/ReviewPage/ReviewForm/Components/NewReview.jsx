import { Stack, Typography, Input } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ButtonGroupRatings from "./ButtonGroupRatings";
import CommentSection from "./CommentSection";
import StarRating from "./StarRatings";

import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { addNewReview } from "../../../../features/reviewSlice";
import { useNavigate, useLocation } from "react-router-dom";
import AllReviews from "./AllReviews";
import { useAddReviewMutation } from "../../../../features/api/apiSlice";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// convet a string to number
// const toNumber = (str) => {
//   return Number(str);
// }

const NewReview = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const studySpace = location.state;
  const [addReview] = useAddReviewMutation();
  console.log(studySpace);
  const id = studySpace ? studySpace._id : null;
  const showResults = async (values) => {
    const newReview = { ...values, spaceId: id };
    newReview.overall = Number(newReview.overall);
    newReview.wifiSpeed = Number(newReview.wifiSpeed);
    newReview.noise = Number(newReview.noise);
    newReview.bgm = Number(newReview.bgm);
    newReview.tableSpace = Number(newReview.tableSpace);
    newReview.timeLimit = Number(newReview.timeLimit);
    newReview.seatsComfort = Number(newReview.seatsComfort);
    newReview.duration = Number(newReview.duration);

    window.alert(JSON.stringify(newReview, undefined, 2));

    addReview(newReview);

    navigate("/studySpace", { state: studySpace });
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "50vw",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2}>
        <br />
        <Typography variant="h6">New Review for : {id}</Typography>
        <Form onSubmit={showResults}>
          {(props, reset) => (
            <form
              onSubmit={(event) => {
                props.handleSubmit(event).then(reset);
              }}
            >
              <></>
              <StarRating />
              <ButtonGroupRatings />
              <Field name="comment">
                {(props) => (
                  <div>
                    <CommentSection
                      name={props.input.name}
                      value={props.input.value}
                      onChange={props.input.onChange}
                    />
                  </div>
                )}
              </Field>
              <button type="submit">Submit</button>

              <br />
              <br />
            </form>
          )}
        </Form>
        <AllReviews />
      </Stack>
    </Box>
  );
};

export default NewReview;
