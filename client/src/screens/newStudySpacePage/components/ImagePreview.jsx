import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    padding: "1rem",
  },
});

const ImagePreview = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h6">Step 3: Images Preview</Typography>
      <Card>
        <img className={classes.card} src={props.images} alt="" />
        <img className={classes.card} src={props.images} alt="" />
      </Card>
    </Box>
  );
};
export default ImagePreview;
