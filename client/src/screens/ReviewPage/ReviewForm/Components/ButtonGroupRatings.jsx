import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Checkboxes } from "mui-rff";
import { Radios } from "mui-rff";

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
        <Radios
          label="Pick one..."
          name="gender"
          required={true}
          data={[
            { label: "< 30mins", value: "<30mins" },
            { label: "1~2hr", value: "1~2hr" },
            { label: "> 2hr", value: ">2hr" },
          ]}
        />
      </Stack>

      <Stack className={classes.btnGroup}>
        {title("What type of task did you do?")}
        <Checkboxes name="best" required={false} data={checkboxData} />
      </Stack>
      <Stack className={classes.btnGroup}>
        {title("How regular do yo come here?")}
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
        {title("Would you recommand this studyspce for other worker?")}
        <Radios
          label="Pick one..."
          name="recommendation"
          required={true}
          data={[
            { label: "Not ☹️", value: "Not" },
            { label: "Great spot 🙂", value: "Great spot" },
            { label: "Come study! 🤗", value: "Come study!" },
          ]}
        />
      </Stack>
    </Box>
  );
};

export default ButtonGroupRatings;
