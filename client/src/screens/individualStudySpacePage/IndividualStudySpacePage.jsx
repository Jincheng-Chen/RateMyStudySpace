import React, { useState, useEffect } from "react";
import { Box, Button, Input, InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReviewBox from "./ReviewBox";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StudySpaceReview from "../searchPage/StudySpaceReview";
import { PhotoGallery } from "./PhotoGallery";
import { addNewImage } from "../../features/reviewSlice";
import { useGetReviewsBySpaceIdQuery } from "../../features/api/apiSlice";
import { useAddImageMutation } from "../../features/api/studySpaceApiSlice";
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
  const navigate = useNavigate();
  const location = useLocation();
  const studySpace = location.state;

  useEffect(() => {
    if (studySpace === null) {
      return navigate("/");
    }
  }, [location]);

  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();
  const [addImage] = useAddImageMutation();

  const { data, isLoading } = useGetReviewsBySpaceIdQuery(
    studySpace ? studySpace._id : "null"
  );

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPicture(value);
  };
  const reviews = data;
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(
    //   addNewImage({
    //     id: studySpace.id,
    //     url: picture,
    //   })
    // );
    console.log(picture);
    addImage({ studySpaceId: studySpace._id, imageUrl: picture });
    setPicture("");
  };

  // const reviews = useSelector((state) => {
  //   return state.reviews.reviews.filter((review) => {
  //     return review.spaceId === studySpace.id;
  //   });
  // });
  if (!isLoading) {
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
          <Button
            variant="contained"
            onClick={() => navigate("/newReview", { state: studySpace })}
          >
            Submit a review
          </Button>
        </Box>
        <Box className={classes.reviewsContainer}>
          <PhotoGallery studySpace={studySpace} />
          {data.map((review) => {
            return <ReviewBox review={review} key={review.id}></ReviewBox>;
          })}
        </Box>
      </Box>
    );
  } else return <div>loading</div>;
}

export default IndividualStudySpacePage;
