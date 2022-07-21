import Box from "@mui/material/Box";
import {
  Card,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { LOCATION_TYPES } from "../../shared/utils";
import { useAddStudySpaceMutation } from "../../features/api/studySpaceApiSlice";

const defaultValues = {
  name: "",
  location: "",
  type: LOCATION_TYPES.LIBRARY,
  url: "",
  id: "",
};

const useStyles = makeStyles({
  card: {
    padding: "3vw",
  },
});

function StudySpaceForm() {
  const [formValues, setFormValues] = useState(defaultValues);

  const [addStudySpace] = useAddStudySpaceMutation();
  const classes = useStyles();
  const navigate = useNavigate();

  const addStudySpaceApiRequest = (studySpace) => {
    addStudySpace(studySpace)
      .unwrap()
      .then((data) => {
        navigate("/newReview", { state: studySpace });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setFormValues({
    //   ...formValues,
    //   id: newId,
    // });
    addStudySpaceApiRequest({ ...formValues, images: [formValues.url] });

    // dispatch(addNewSpace({ ...formValues, id: newId }));
    // setFormValues(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Box className={classes.card}>
          <FormControl>
            <InputLabel htmlFor="sp-name">Name</InputLabel>
            <Input
              id="sp-name"
              aria-describedby="helper-name"
              name={"name"}
              value={formValues.name}
              onChange={handleInputChange}
            />
            <FormHelperText id="helper-name">
              What is the name of the study space?
            </FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel htmlFor="sp-location">Location</InputLabel>
            <Input
              id="sp-location"
              aria-describedby="helper-location"
              name={"location"}
              value={formValues.location}
              onChange={handleInputChange}
            />
            <FormHelperText id="helper-location">
              What is the address?
            </FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel htmlFor="sp-image">Image URL</InputLabel>
            <Input
              id="sp-image"
              aria-describedby="helper-image"
              name={"url"}
              value={formValues.url}
              onChange={handleInputChange}
            />
            <FormHelperText id="helper-image">
              What is the url for the image?
            </FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel
              htmlFor="sp-type-radio"
              name={"type"}
              onChange={handleInputChange}
            >
              Type of Study Space
            </FormLabel>
            <RadioGroup
              aria-label="Study Space"
              id="sp-type-radio"
              defaultValue={LOCATION_TYPES.LIBRARY}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value={LOCATION_TYPES.LIBRARY}
                control={<Radio />}
                label="Library"
              />
              <FormControlLabel
                value={LOCATION_TYPES.CAFE}
                control={<Radio />}
                label="Cafe"
              />
            </RadioGroup>
          </FormControl>
          <Box>
            <Button variant="contained" type={"submit"}>
              Post and Review
            </Button>
          </Box>
        </Box>
      </Card>
    </form>
  );
}

export default StudySpaceForm;
