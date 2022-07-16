import React, { useState } from "react";
import { Box, Typography, CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StudySpaceReview from "./StudySpaceReview";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Filters from "./Filters";
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
  const location = "Vancouver";
  const navigate = useNavigate();
  const classes = useStyles();
  const [studySpaces, setStudySpaces] = useState([]);

  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.topContainer}>
        <Typography variant={"h5"} component={"h2"}>
          Filter Options
        </Typography>
        <Filters stateChanger={setStudySpaces} location={location} />
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
