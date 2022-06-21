import { Box, Stack, Typography, Rating } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

//Styles
const useStyles = makeStyles({
  starRating: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0% 5%",
  },
});

//Component
const StarRating = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  return (
    <Box>
      <Stack direction="row" spacing={5} className={classes.starRating}>
        <Typography>{props.name}</Typography>
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        ></Rating>
      </Stack>
    </Box>
  );
};

export default StarRating;
