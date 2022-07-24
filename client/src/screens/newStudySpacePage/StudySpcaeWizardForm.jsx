import React from "react";
import { TextField } from "mui-rff";
import {
  Box,
  Stack,
  Typography,
  Input,
  Card,
  LinearProgress,
  Button,
} from "@mui/material";
import { useState } from "react";
import LocationSearcher from "./components/LocationSearcher";
import StudySpaceDetails from "./components/StudySpaceDetails";
import ImagePreview from "./components/ImagePreview";
import { makeStyles } from "@mui/styles";

//Styles
const classes = makeStyles({
  OuterContainer: {
    display: "flex",
    width: "50%",
    maxWidth: "50%",
    margin: "auto",
    backgroundColor: "#b50000",
  },
});

const StudySpcaeWizardForm = () => {
  const [progress, setProgress] = useState(33);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        maxWidth: "50%",
        margin: "auto",
      }}
    >
      <Typography variant="h2">New Study Space</Typography>
      <LinearProgress variant="determinate" value={progress} />
      <Typography variant="h6">Step 1: Location</Typography>
      <LocationSearcher />
      <Typography variant="h6">Step 2: Details</Typography>
      <StudySpaceDetails />
      <Typography variant="h6">Step 3: Images</Typography>
      <ImagePreview />
      <Button variant="contained" type="submit">
        {" "}
        Next
      </Button>
    </Box>
  );
};

export default StudySpcaeWizardForm;
