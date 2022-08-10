import { Card, Typography, Box, Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import { makeStyles } from "@mui/styles";
import placeHolder from "../../shared/images/placeholderLibrary.jpg";
import { useGetStudySpaceByIdQuery } from "../../features/api/apiSlice";
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
  const { data, isLoading } = useGetStudySpaceByIdQuery(
    studySpace ? studySpace._id : "null"
  );
  if (!isLoading) {
    return (
      <Card elevation={5}>
        <Box>
          <img
            className={classes.img}
            src={data.images[0] ? data.images[0] : placeHolder}
            alt={data.name}
          />
        </Box>
        <Box>
          <Typography variant={"h6"} component={"h3"}>
            {data.name}
          </Typography>
          <Rating value={data.overall} precision={0.5} readOnly />
        </Box>
        <Box>
          <Box className={classes.textIconBox}>
            <VolumeDownIcon fontSize="medium"></VolumeDownIcon>
            <Typography component={"legend"}>Noise</Typography>
          </Box>
          <Rating value={data.noise} precision={0.5} readOnly />
          <Box className={classes.textIconBox}>
            <TableRestaurantIcon fontSize="medium"></TableRestaurantIcon>
            <Typography component={"legend"}>Table Space</Typography>
          </Box>
          <Rating value={data.tableSpace} precision={0.5} readOnly />
          <Box className={classes.textIconBox}>
            <AccessTimeIcon fontSize="medium"></AccessTimeIcon>
            <Typography component={"legend"}>Time Limit</Typography>
          </Box>
          <Rating value={data.timeLimit} precision={0.5} readOnly />
        </Box>
      </Card>
    );
  }
}

export default StudySpaceReview;
