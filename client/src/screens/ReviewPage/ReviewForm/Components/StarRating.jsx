import { Box, Stack, Typography, Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Field } from "react-final-form";

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

  // funtions that convert a string to camel case and removes all spaces
  const camelCase = (str) => {
    return str
      .toLowerCase()
      .replace(/\s(.)/g, (match, group1) => group1.toUpperCase());
  };

  return (
    <Box>
      <Stack direction="row" spacing={5} className={classes.starRating}>
        <Typography>{props.name}</Typography>
        <Field name={camelCase(props.name)} type="radio">
          {(props) => (
            <div>
              <Rating
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
                precision={0.5}
              />
            </div>
          )}
        </Field>
      </Stack>
    </Box>
  );
};

export default StarRating;
