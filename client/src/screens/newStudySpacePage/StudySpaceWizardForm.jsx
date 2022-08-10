import React from "react";
import { Box, Typography, Card, LinearProgress, Button } from "@mui/material";
import { useState } from "react";
import LocationSearcher from "./components/LocationSearcher";
import StudySpaceDetails from "./components/StudySpaceDetails";
import { makeStyles } from "@mui/styles";
import { Form } from "react-final-form";
import { useAddStudySpaceMutation } from "../../features/api/studySpaceApiSlice";
import { useNavigate } from "react-router-dom";

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
    width: "89%",
    backgroundColor: "#f5f5f5",
  },
  stepButtons: {
    width: "500px",
  },
});

const StudySpaceWizardForm = () => {
  const [progress, setProgress] = useState(50);
  const [addStudySpace] = useAddStudySpaceMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const name = values.studySpaceName ? values.studySpaceName : null;
    const type = values.studySpaceType ? values.studySpaceType : null;
    const location = values.city ? values.city : null;
    const lat = values.lat ? values.lat : null;
    const lon = values.lon ? values.lon : null;
    const images = [values.imgLink1, values.imgLink2];

    const newStudySpace = {
      name: name,
      type: type,
      location: location,
      coordinates: {
        type: "Point",
        coordinates: [lon, lat],
      },
      images: images,
    };

    await addStudySpace(newStudySpace);

    navigate("/search", { state: { lat: lat, lon: lon, radius: 5 } });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "60%",
        maxWidth: "60%",
        margin: "auto",
        padding: "2rem",
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
