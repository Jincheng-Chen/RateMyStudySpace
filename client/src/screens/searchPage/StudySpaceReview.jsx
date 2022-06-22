import { Card, Typography, Box, Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <Card
      elevation={5}
      // onClick={() => {
      //   navigate('/studySpace', {state: studySpace})
      // }}
    >
      <Box>
        <img
          className={classes.img}
          src={studySpace.url}
          alt={studySpace.name}
        />
      </Box>
      <Box>
        <Typography variant={"h6"} component={"h3"}>
          {studySpace.name}
        </Typography>
        <Rating value={studySpace.overall} precision={0.5} readOnly />
      </Box>
      <Box>
        <Box className={classes.textIconBox}>
          <VolumeDownIcon fontSize="medium"></VolumeDownIcon>
          <Typography component={"legend"}>Noise</Typography>
        </Box>
        <Rating value={studySpace.noise} precision={0.5} readOnly />
        <Box className={classes.textIconBox}>
          <TableRestaurantIcon fontSize="medium"></TableRestaurantIcon>
          <Typography component={"legend"}>Table Space</Typography>
        </Box>
        <Rating value={studySpace.tableSpace} precision={0.5} readOnly />
        <Box className={classes.textIconBox}>
          <AccessTimeIcon fontSize="medium"></AccessTimeIcon>
          <Typography component={"legend"}>Time Limit</Typography>
        </Box>
        <Rating value={studySpace.timeLimit} precision={0.5} readOnly />
      </Box>
    </Card>
  );
}

export default StudySpaceReview;
