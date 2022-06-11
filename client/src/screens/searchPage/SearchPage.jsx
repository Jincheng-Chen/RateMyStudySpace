import React from "react";
import { Box, Typography, Grid, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StudySpaceReview from "./StudySpaceReview";
import IKB from "../../shared/images/IKB.jpg";
import TheNest from "../../shared/images/TheNest.jpg";
import Breka from "../../shared/images/Breka.jpeg";
import TheBoulevard from "../../shared/images/TheBoulevard.webp";

const useStyles = makeStyles({
  outerContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: "100%",
  },
  topContainer: {},
  bottomContainer: {},
  grid: {},
});

function SearchPage() {
  const classes = useStyles();
  const studySpaceReviews = [
    {
      id: 1001,
      name: "IKB",
      overall: 4,
      noise: 3.5,
      tableSpace: 4,
      timeLimit: 5,
      url: IKB,
    },
    {
      id: 1002,
      name: "The Nest",
      overall: 4.5,
      noise: 2.5,
      tableSpace: 3.5,
      timeLimit: 5,
      url: TheNest,
    },
    {
      id: 1003,
      name: "Breka Kitsilano",
      overall: 3.5,
      noise: 2,
      tableSpace: 2,
      timeLimit: 3,
      url: Breka,
    },
    {
      id: 1004,
      name: "The Boulevard",
      overall: 3,
      noise: 3,
      tableSpace: 2.5,
      timeLimit: 2.5,
      url: TheBoulevard,
    },
  ];
  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.topContainer}>
        <Typography variant={"h5"} component={"h2"}>
          Filter Options
        </Typography>
        <Card>Filters are currently under construction!</Card>
      </Box>
      <Box className={classes.bottomContainer}>
        <Typography variant={"h5"} component={"h2"}>
          Search Results
        </Typography>
        <Grid container className={classes.grid} columnSpacing="3vw">
          {studySpaceReviews.map((space) => {
            return (
              <Grid item xs={3} key={space.id}>
                <StudySpaceReview studySpace={space}></StudySpaceReview>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default SearchPage;
