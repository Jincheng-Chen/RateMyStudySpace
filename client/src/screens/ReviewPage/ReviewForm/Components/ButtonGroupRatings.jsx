import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Checkboxes } from "mui-rff";
import { Radios, TextField } from "mui-rff";

const checkboxData = [
  { label: "Work", value: "work" },
  { label: "Study", value: "study" },
  { label: "Read", value: "Read" },
];

const useStyles = makeStyles({
  btnGroup: {
    display: "flex",
    justifyItems: "left",
    Typography: {
      "font-size": "1rem",
    },
  },
});

const title = (content) => (
  <Typography variant="h6" align="left">
    {content}
  </Typography>
);

const ButtonGroupRatings = () => {
  const classes = useStyles();
  return (
    <Box>
      <Stack className={classes.btnGroup}>
        {title("How long did you stay?")}
        <TextField label="In hours" name="duration" required={true} />
      </Stack>

      <Stack className={classes.btnGroup}>
        {title("What type of task did you do?")}
        <Checkboxes name="tasks" required={false} data={checkboxData} />
      </Stack>
      <Stack className={classes.btnGroup}>
        {title("How often do you come here?")}
        <Radios
          label="Pick one..."
          name="frequency"
          required={true}
          data={[
            { label: "Not often", value: "Not often" },
            { label: "<3/week", value: "<3/week" },
            { label: ">3/week", value: ">3/week" },
          ]}
        />
      </Stack>
      <Stack className={classes.btnGroup}>
        {title("Would you recommend this study space for other workers?")}
        <Radios
          label="Pick one..."
          name="recommendation"
          required={true}
          data={[
            { label: "No ☹️", value: "Not" },
            { label: "Great spot 🙂", value: "Great spot" },
            { label: "Come study! 🤗", value: "Come study!" },
          ]}
        />
      </Stack>
    </Box>
  );
};

export default ButtonGroupRatings;
