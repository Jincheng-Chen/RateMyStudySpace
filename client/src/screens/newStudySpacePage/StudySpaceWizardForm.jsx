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
const handleSubmit = async (values) => {
  console.log(values);
  window.alert(JSON.stringify(values, undefined, 2));
};

const StudySpaceWizardForm = () => {
  const [progress, setProgress] = useState(50);
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
      <Form onSubmit={handleSubmit}>
        {(props, reset) => (
          <form
            onSubmit={(event) => {
              props.handleSubmit(event).then(reset);
            }}
          >
            <Card className={classes.FormCard}>
              {progress === 50 ? <LocationSearcher /> : null}
              {progress === 99 ? <StudySpaceDetails /> : null}
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
                setProgress(progress + 49);
              }}
            >
              Next
            </Button>
          </form>
        )}
      </Form>
      <br />
      <br />
    </Box>
  );
};

export default StudySpaceWizardForm;
