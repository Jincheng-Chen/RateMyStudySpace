import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ButtonGroupRatings from "./ButtonGroupRatings";
import CommentSection from "./CommentSection";
import StarRating from "./StarRatings";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { addNewReview } from "../../../../features/reviewSlice";
import { useNavigate } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function NewReview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showResults = async (values) => {
    await sleep(500); // server latency
    window.alert(JSON.stringify(values, undefined, 2));
    dispatch(addNewReview(values));
    navigate("/search");
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
        <Typography variant="h6">New Review</Typography>
        <Form onSubmit={showResults}>
          {(props, reset) => (
            <form
              onSubmit={(event) => {
                props.handleSubmit(event).then(reset);
              }}
            >
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
            </form>
          )}
        </Form>
      </Stack>
    </Box>
  );
}

export default NewReview;
