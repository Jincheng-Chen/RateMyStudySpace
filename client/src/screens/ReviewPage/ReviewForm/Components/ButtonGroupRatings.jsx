import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btnGroup: {
    display: "flex",
    justifyItems: "left",
    Typography: {
      "font-size": "1rem",
    },
  },
});

const ButtonGroupRatings = () => {
  const classes = useStyles();
  return (
    <Box>
      <Stack className={classes.btnGroup}>
        <Typography align="left">How long did you stay?</Typography>
        <ButtonGroup>
          <Button>&lt;30mins</Button>
          <Button>1~2hr</Button>
          <Button>&gt;2hr</Button>
        </ButtonGroup>
      </Stack>

      <Stack className={classes.btnGroup}>
        <Typography align="left">What type of task did you do?</Typography>
        <ButtonGroup>
          <Button>Work</Button>
          <Button>Study</Button>
          <Button>Reading</Button>
        </ButtonGroup>
      </Stack>
      <Stack className={classes.btnGroup}>
        <Typography align="left">How regular do yo come here?</Typography>
        <ButtonGroup>
          <Button>Not often</Button>
          <Button>&lt;1 per week</Button>
          <Button>&gt;2hr</Button>
        </ButtonGroup>
      </Stack>
      <Stack className={classes.btnGroup}>
        <Typography align="left">
          Would you recommand this studyspce for other worker?
        </Typography>
        <ButtonGroup>
          <Button>Not ☹️ </Button>
          <Button>Great spot 🙂</Button>
          <Button>Come study! 🤗</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default ButtonGroupRatings;
