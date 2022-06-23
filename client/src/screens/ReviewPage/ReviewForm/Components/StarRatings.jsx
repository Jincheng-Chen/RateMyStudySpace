import { Box } from "@mui/system";
import React from "react";
import { Rating, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarRating from "./StarRating";

const useStyles = makeStyles({
  starRating: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0% 5%",
  },
});

const StarRatings = () => {
  const classes = useStyles();
  return (
    <Box sx={{}}>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h6" align="left">
          Facility:
        </Typography>
        <StarRating name="WiFi Speed"></StarRating>
        <StarRating name="Time limit"></StarRating>

        <Typography variant="h6" align="left">
          Seats and Table:
        </Typography>
        <StarRating name="Table size"></StarRating>
        <StarRating name="Seats comfort"></StarRating>

        <Typography variant="h6" align="left">
          Vibe:
        </Typography>
        <StarRating name="Quit level"></StarRating>
        <StarRating name="BGM"></StarRating>
      </Stack>
    </Box>
  );
};

export default StarRatings;
