import React from "react";
import { Box, Typography, Card, Rating } from "@mui/material";
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
    marginRight: "3vw",
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
          <Rating value={review.overall} readOnly />
          <Typography>{new Date(review.createdAt).toDateString()}</Typography>
        </Box>
      </Box>

      <Typography
        variant="body1"
        align="left"
        style={{ marginLeft: "2vw", marginTop: "2vh", marginRight: "2vw" }}
        className={classes.pText}
      >
        {review.comments}
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
