import React, { useState, useEffect } from "react";
import { Box, Button, Input, InputLabel, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReviewBox from "./ReviewBox";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StudySpaceReview from "../searchPage/StudySpaceReview";
import { PhotoGallery } from "./PhotoGallery";
import { addNewImage } from "../../features/reviewSlice";
import { useGetReviewsBySpaceIdQuery } from "../../features/api/apiSlice";
import { useAddImageMutation } from "../../features/api/studySpaceApiSlice";
import SubmitPictureModal from "./SubmitPictureModal";
const useStyles = makeStyles({
  outerContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    backgroundColor: "rgba(249,250,251)",
  },
  reviewsContainer: {
    marginLeft: "5vw",
    height: "95vh",
    maxHeight: "95vh",
    overflow: "scroll",
    overflowX: "hidden",
    maxHeight: "100%",
    width: "65vw",
    alignItems: "center",
    marginRight: "2vw",
  },
  spaceContainer: {
    marginTop: "3vh",
    marginLeft: "3vw",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2vh",
    gap: "2vw",
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

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetReviewsBySpaceIdQuery(
    studySpace ? studySpace._id : "null"
  );

  // const handleInputChange = (e) => {
  //   const { value } = e.target;
  //   setPicture(value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // dispatch(
  //   //   addNewImage({
  //   //     id: studySpace.id,
  //   //     url: picture,
  //   //   })
  //   // );
  //   console.log("picture", picture);
  //   addImage({ studySpaceId: studySpace._id, imageUrl: picture });
  //   setPicture("");
  // };

  // const reviews = useSelector((state) => {
  //   return state.reviews.reviews.filter((review) => {
  //     return review.spaceId === studySpace.id;
  //   });
  // });
  let reviews = data;
  if (!isLoading) {
    reviews = data;
    return (
      <Box className={classes.outerContainer}>
        <Box className={classes.spaceContainer}>
          <StudySpaceReview studySpace={studySpace}></StudySpaceReview>
          <Box className={classes.buttonContainer}>
            {/* <form onSubmit={handleSubmit}>
              <InputLabel htmlFor="sp-image">Image URL</InputLabel>
              <Input
                id="sp-image"
                aria-describedby="helper-image"
                name={"url"}
                value={picture}
                onChange={handleInputChange}
              />
              
            </form> */}
            <Button variant="contained" onClick={() => setOpen(true)}>
              Submit Picture
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/newReview", { state: studySpace })}
            >
              Submit a review
            </Button>
          </Box>
        </Box>
        <Box className={classes.reviewsContainer}>
          <Box style={{ marginTop: "3vh" }}>
            <PhotoGallery studySpace={studySpace} />
          </Box>
          {data.map((review) => {
            return <ReviewBox review={review} key={review.id}></ReviewBox>;
          })}
        </Box>

        <SubmitPictureModal
          open={open}
          setClosed={() => setOpen(false)}
          studySpace={studySpace}
        ></SubmitPictureModal>
      </Box>
    );
  } else return <div>loading</div>;
}

export default IndividualStudySpacePage;
