import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReviewBox from "./ReviewBox";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import StudySpaceReview from "../searchPage/StudySpaceReview";
import { PhotoGallary } from "./PhotoGallary";

const useStyles = makeStyles({
  outerContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    marginLeft: "3vw",
    marginTop: "3vh",
  },
  reviewsContainer: {
    marginLeft: "5vw",
    height: "80vh",
    overflow: "scroll",
    overflowX: "hidden",
    width: "65vw",
    alignItems: "center",
  },
});
function IndividualStudySpacePage(props) {
  const classes = useStyles();
  const location = useLocation();
  const studySpace = location.state;

  const reviews = useSelector((state) => {
    return state.reviews.reviews.filter((review) => {
      return review.spaceId === studySpace.id;
    });
  });
  return (
    <Box className={classes.outerContainer}>
      <StudySpaceReview studySpace={studySpace}></StudySpaceReview>
      <Box className={classes.reviewsContainer}>
        <PhotoGallary />
        {reviews.map((review) => {
          return <ReviewBox review={review} key={review.id}></ReviewBox>;
        })}
      </Box>
    </Box>
  );
}

export default IndividualStudySpacePage;
