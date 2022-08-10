import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReviewBox from "./ReviewBox";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import StudySpaceReview from "../searchPage/StudySpaceReview";
import { PhotoGallery } from "./PhotoGallery";
import { useGetReviewsBySpaceIdQuery } from "../../features/api/apiSlice";
import { useGetStudySpaceByIdQuery } from "../../features/api/apiSlice";
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

  const studySpaceQuery = useGetStudySpaceByIdQuery(
    studySpace ? studySpace._id : "null"
  );

  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetReviewsBySpaceIdQuery(
    studySpace ? studySpace._id : "null"
  );

  let reviews = data;
  let studySpaceData = studySpaceQuery.data;
  if (!isLoading && !studySpaceQuery.isLoading) {
    studySpaceData = studySpaceQuery.data;
    reviews = data;
    return (
      <Box className={classes.outerContainer}>
        <Box className={classes.spaceContainer}>
          <StudySpaceReview studySpace={studySpaceData}></StudySpaceReview>
          <Box className={classes.buttonContainer}>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Submit Picture
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/newReview", { state: studySpaceData })}
            >
              Submit a review
            </Button>
          </Box>
        </Box>
        <Box className={classes.reviewsContainer}>
          <Box style={{ marginTop: "3vh" }}>
            <PhotoGallery studySpace={studySpaceData} />
          </Box>
          {data.length < 1 ? (
            <Box>No reviews for this studyspace</Box>
          ) : (
            data.map((review) => {
              return <ReviewBox review={review} key={review.id}></ReviewBox>;
            })
          )}
        </Box>

        <SubmitPictureModal
          open={open}
          setClosed={() => setOpen(false)}
          studySpace={studySpaceData}
        ></SubmitPictureModal>
      </Box>
    );
  } else return <div>loading</div>;
}

export default IndividualStudySpacePage;
