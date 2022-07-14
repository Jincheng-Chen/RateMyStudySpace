import React, { useState } from "react";
import { Box, Typography, CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StudySpaceReview from "./StudySpaceReview";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Filters from "./Filters";
import { useGetStudySpacesByLocationQuery } from "../../features/api/studySpaceApiSlice";
const useStyles = makeStyles({
  outerContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: "100%",
    alignItems: "center",
  },
  topContainer: {},
  bottomContainer: {
    width: "90%",
  },
  grid: {},
});

function SearchPage() {
  const navigate = useNavigate();
  const classes = useStyles();
  // const [studySpaces, setStudySpaces] = useState([])
  const { data, isLoading, isError } =
    useGetStudySpacesByLocationQuery("Vancouver");
  let studySpaces = [];
  console.log(data);
  // const studySpaceReviews = [
  //   {
  //     id: 1001,
  //     name: "IKB",
  //     overall: 4,
  //     noise: 3.5,
  //     tableSpace: 4,
  //     timeLimit: 5,
  //     url: IKB,
  //   },
  //   {
  //     id: 1002,
  //     name: "The Nest",
  //     overall: 4.5,
  //     noise: 2.5,
  //     tableSpace: 3.5,
  //     timeLimit: 5,
  //     url: TheNest,
  //   },
  //   {
  //     id: 1003,
  //     name: "Breka Kitsilano",
  //     overall: 3.5,
  //     noise: 2,
  //     tableSpace: 2,
  //     timeLimit: 3,
  //     url: Breka,
  //   },
  //   {
  //     id: 1004,
  //     name: "The Boulevard",
  //     overall: 3,
  //     noise: 3,
  //     tableSpace: 2.5,
  //     timeLimit: 2.5,
  //     url: TheBoulevard,
  //   },
  // ]; */
  if (!isLoading) {
    console.log(isError);
    console.log(data);
    studySpaces = data;
  }
  // const studySpaces = useSelector((state) => state.reviews.studySpaces);

  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.topContainer}>
        <Typography variant={"h5"} component={"h2"}>
          Filter Options
        </Typography>
        <Filters />
      </Box>
      <Box className={classes.bottomContainer}>
        <Typography variant={"h5"} component={"h2"}>
          Search Results
        </Typography>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "5rem",
            type: "loop",
          }}
        >
          {studySpaces.map((space) => {
            return (
              <SplideSlide key={space._id}>
                <CardActionArea
                  onClick={() => navigate("/studySpace", { state: space })}
                >
                  <StudySpaceReview studySpace={space}></StudySpaceReview>
                </CardActionArea>
                <br />
                <br />
              </SplideSlide>
            );
          })}
        </Splide>
      </Box>
    </Box>
  );
}

export default SearchPage;
