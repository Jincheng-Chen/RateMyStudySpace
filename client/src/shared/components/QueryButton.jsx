import React from "react";
import { Card, Box, Typography, CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  button: {
    width: "100%",
    height: "60vh",
  },
});
function QueryButton({ cityData }) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card onClick={() => console.log("clicked")}>
      <CardActionArea
        onClick={() =>
          navigate("search", {
            state: {
              lat: cityData.lat,
              lon: cityData.lon,
              radius: cityData.radius,
            },
          })
        }
      >
        <Box
          sx={{ backgroundImage: `url(${cityData.url})` }}
          className={classes.button}
        ></Box>
        <Typography variant="h5">{cityData.label}</Typography>
      </CardActionArea>
    </Card>
  );
}

export default QueryButton;
