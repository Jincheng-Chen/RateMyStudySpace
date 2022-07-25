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
import { Form, Field } from "react-final-form";

//Styles
const classes = makeStyles({
  OuterContainer: {
    display: "flex",
    width: "50%",
    maxWidth: "50%",
    margin: "auto",
    backgroundColor: "#b50000",
  },
  FormCard: {
    border: "2px solid #e0e0e0",
    padding: "2rem",
    width: "100%",
    margin: "auto",
    backgroundColor: "#f5f5f5",
  },
  stepButtons: {
    width: "500px",
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
      <br />
      <Typography variant="h5">New Study Space</Typography>
      <br />
      <LinearProgress variant="determinate" value={progress} />
      <br />
      <Card className={classes.FormCard}>
        {progress === 33 ? <LocationSearcher /> : null}
        {progress === 66 ? <StudySpaceDetails /> : null}
        {progress === 99 ? <ImagePreview /> : null}
      </Card>
      <Button
        variant="contained"
        type="submit"
        className={classes.stepButtons}
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          marginTop: "1.5rem",
          marginBottom: "1rem",
        }}
        onClick={() => {
          setProgress(progress + 33);
        }}
      >
        Next
      </Button>
      <br />
      <br />
    </Box>
  );
};

export default StudySpcaeWizardForm;
