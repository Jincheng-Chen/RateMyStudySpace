import { Box } from "@mui/system";
import React from "react";
import { Rating, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
      <Typography variant="h6" align="left">
        Facility:
      </Typography>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Stack direction="row" spacing={5} className={classes.starRating}>
          <Typography>WiFi Qulity</Typography>
          <Rating></Rating>
        </Stack>
        <Stack direction="row" spacing={5} className={classes.starRating}>
          <Typography>Power Outlet</Typography>
          <Rating></Rating>
        </Stack>
        <Stack direction="row" spacing={5} className={classes.starRating}>
          <Typography>Is there a time limit?</Typography>
          <Rating></Rating>
        </Stack>
        <Stack direction="row" spacing={5} className={classes.starRating}>
          <Typography>Laptop Fridiendly</Typography>
          <Rating></Rating>
        </Stack>

        <Typography variant="h6" align="left">
          Seats and Table:
        </Typography>
        <Stack direction="row" spacing={5} className={classes.starRating}>
          <Typography>Table size</Typography>
          <Rating></Rating>
        </Stack>

        <Stack direction="row" spacing={5} className={classes.starRating}>
          <Typography>Seats comfort</Typography>
          <Rating></Rating>
        </Stack>
        <Typography variant="h6" align="left">
          Vibe:
        </Typography>
        <Stack direction="row" spacing={5} className={classes.starRating}>
          <Typography>Quitness</Typography>
          <Rating></Rating>
        </Stack>
        <Stack direction="row" spacing={5} className={classes.starRating}>
          <Typography>BGM</Typography>
          <Rating></Rating>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarRatings;
