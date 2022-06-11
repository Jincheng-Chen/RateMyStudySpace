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

const defaultValues = {
  name: "",
  location: "",
  type: "Library",
};

const useStyles = makeStyles({
  card: {
    padding: "3vw",
  },
});

function StudySpaceForm() {
  const [formValues, setFormValues] = useState(defaultValues);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
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
              defaultValue="Library"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Library"
                control={<Radio />}
                label="Library"
              />
              <FormControlLabel value="Cafe" control={<Radio />} label="Cafe" />
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
