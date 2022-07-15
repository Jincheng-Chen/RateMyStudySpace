import { Card, Typography, Box, Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  textIconBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: "4vh",
    justifyContent: "center",
  },
  img: {
    height: "20vw",
  },
});

function StudySpaceReview({ studySpace }) {
  const classes = useStyles();
  const reviews = useSelector((state) => {
    return state.reviews.reviews.filter((review) => {
      return review.spaceId === studySpace.id;
    });
  });
  const overall =
    reviews.reduce((previousValue, currentReview) => {
      return previousValue + currentReview.overall;
    }, 0) / reviews.length;
  const noise =
    reviews.reduce((previousValue, currentReview) => {
      return previousValue + currentReview.noise;
    }, 0) / reviews.length;
  const tableSpace =
    reviews.reduce((previousValue, currentReview) => {
      return previousValue + currentReview.tableSpace;
    }, 0) / reviews.length;
  const timeLimit =
    reviews.reduce((previousValue, currentReview) => {
      return previousValue + currentReview.timeLimit;
    }, 0) / reviews.length;

  return (
    <Card elevation={5}>
      <Box>
        <img
          className={classes.img}
          src={studySpace.images[0]}
          alt={studySpace.name}
        />
      </Box>
      <Box>
        <Typography variant={"h6"} component={"h3"}>
          {studySpace.name}
        </Typography>
        <Rating value={overall} precision={0.5} readOnly />
      </Box>
      <Box>
        <Box className={classes.textIconBox}>
          <VolumeDownIcon fontSize="medium"></VolumeDownIcon>
          <Typography component={"legend"}>Noise</Typography>
        </Box>
        <Rating value={noise} precision={0.5} readOnly />
        <Box className={classes.textIconBox}>
          <TableRestaurantIcon fontSize="medium"></TableRestaurantIcon>
          <Typography component={"legend"}>Table Space</Typography>
        </Box>
        <Rating value={tableSpace} precision={0.5} readOnly />
        <Box className={classes.textIconBox}>
          <AccessTimeIcon fontSize="medium"></AccessTimeIcon>
          <Typography component={"legend"}>Time Limit</Typography>
        </Box>
        <Rating value={timeLimit} precision={0.5} readOnly />
      </Box>
    </Card>
  );
}

export default StudySpaceReview;
