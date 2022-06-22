import React from "react";
import {
  Box,
  Typography,
  Autocomplete,
  Card,
  Rating,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    marginTop: "2vh",
  },
  topLeftContainer: {
    display: "flex",
    flexDirection: "column",
    align: "left",

    marginLeft: "2vw",
  },
  img: {
    height: "20vw",
  },
  reviewCard: {
    marginTop: "3vh",
    width: "60vw",
    height: "35vh",
    margin: "auto",
  },
  pText: {
    marginLeft: "3vw",
    marginTop: "2vh",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: "2vh",
    marginBottom: "2vh",
  },
  rating: {
    flex: "1",
    justifyContent: "center",
  },
});
function ReviewBox({ review }) {
  const classes = useStyles();
  return (
    <Card className={classes.reviewCard}>
      <Box className={classes.topContainer}>
        <Box className={classes.topLeftContainer}>
          <Typography align="left">{review.user}</Typography>
          <Typography align="left">{review.date}</Typography>
          <Rating value={review.overall} readOnly />
        </Box>
      </Box>

      <Typography
        variant="body1"
        align="left"
        style={{ marginLeft: "2vw", marginTop: "2vh" }}
        className={classes.pText}
      >
        {review.review}
      </Typography>
      <Box className={classes.ratingContainer}>
        <Box className={classes.rating}>
          <Typography>Noise</Typography>
          <Rating value={review.noise} readOnly />
        </Box>
        <Box className={classes.rating}>
          <Typography>Table Space</Typography>
          <Rating value={review.tableSpace} readOnly />
        </Box>
        <Box className={classes.rating}>
          <Typography>Time Limit</Typography>
          <Rating value={review.timeLimit} readOnly />
        </Box>
      </Box>
    </Card>
  );
}

export default ReviewBox;
