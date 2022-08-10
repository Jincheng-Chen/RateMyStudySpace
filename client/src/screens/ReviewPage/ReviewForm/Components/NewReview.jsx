import { Stack, Typography, Card, LinearProgress, Button } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

import ButtonGroupRatings from "./ButtonGroupRatings";
import CommentSection from "./CommentSection";
import StarRating from "./StarRatings";

import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useAddReviewMutation } from "../../../../features/api/apiSlice";
import { useState } from "react";

//Styles
const useStyles = makeStyles({
  FromCard: {
    border: "2px solid #e0e0e0",
    padding: "2rem",
    width: "89%",
  },
  stepButtons: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    margin: "2rem",
  },
});

const NewReview = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const studySpace = location.state;
  const [addReview] = useAddReviewMutation();
  const [progress, setProgress] = useState(33);
  console.log(studySpace);
  const id = studySpace ? studySpace._id : null;
  const name = studySpace ? studySpace.name : "StudySpace";
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

    addReview(newReview);

    navigate("/studySpace", { state: studySpace });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        maxWidth: "50%",
        margin: "auto",
      }}
    >
      <Stack spacing={2}>
        <br />
        <Typography variant="h5">New Review for : {name}</Typography>
        <LinearProgress variant="determinate" value={progress} />

        <Form onSubmit={showResults}>
          {(props, reset) => (
            <form
              onSubmit={(event) => {
                props.handleSubmit(event).then(reset);
              }}
            >
              <Card className={classes.FromCard}>
                {progress === 33 ? <StarRating /> : null}
                {progress === 66 ? <ButtonGroupRatings /> : null}
                {progress === 99 ? (
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
                ) : null}
              </Card>
              <Button
                variant="contained"
                type="submit"
                onClick={() => {
                  setProgress(progress + 33);
                }}
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                  marginTop: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                Next
              </Button>
              <br />
              <br />
            </form>
          )}
        </Form>
      </Stack>
    </Box>
  );
};

export default NewReview;
