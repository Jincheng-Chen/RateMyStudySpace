import React, { useState, useEffect } from "react";
import { Box, Button, Input, InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReviewBox from "./ReviewBox";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StudySpaceReview from "../searchPage/StudySpaceReview";
import { PhotoGallery } from "./PhotoGallery";
import { addNewImage } from "../../features/reviewSlice";
import { useGetReviewsBySpaceIdQuery } from "../../features/api/apiSlice";
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

  const [picture, setPicture] = useState("");
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetReviewsBySpaceIdQuery(
    studySpace ? studySpace.id : "null"
  );
  const handleInputChange = (e) => {
    const { value } = e.target;
    setPicture(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addNewImage({
        id: studySpace.id,
        url: picture,
      })
    );
    setPicture("");
  };

  // const reviews = useSelector((state) => {
  //   return state.reviews.reviews.filter((review) => {
  //     return review.spaceId === studySpace.id;
  //   });
  // });

  // useEffect(() => {
  //   getReviewsBySpaceId(studySpace.id).unwind.then(data => {
  //     console.log(data)
  //   })
  // },[])
  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.spaceContainer}>
        <StudySpaceReview studySpace={studySpace}></StudySpaceReview>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="sp-image">Image URL</InputLabel>
          <Input
            id="sp-image"
            aria-describedby="helper-image"
            name={"url"}
            value={picture}
            onChange={handleInputChange}
          />
          <Button variant="contained" type={"submit"}>
            Submit Picture
          </Button>
        </form>
      </Box>
      <Box className={classes.reviewsContainer}>
        {/* <PhotoGallery studySpace={studySpace} /> */}
        {reviews.map((review) => {
          return <ReviewBox review={review} key={review.id}></ReviewBox>;
        })}
      </Box>
    </Box>
  );
}

export default IndividualStudySpacePage;
