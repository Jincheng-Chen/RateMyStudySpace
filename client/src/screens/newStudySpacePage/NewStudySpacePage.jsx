import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import StudySpaceForm from "./StudySpaceForm";

const useStyles = makeStyles({
  outerContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: "100%",
  },
  topContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});

function NewStudySpacePage() {
  const classes = useStyles();
  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.topContainer}>
        <StudySpaceForm />
      </Box>
    </Box>
  );
}

export default NewStudySpacePage;
