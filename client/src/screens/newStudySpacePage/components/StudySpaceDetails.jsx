import { Box, Stack, Typography, TextField } from "@mui/material";
import React from "react";

const StudySpaceDetails = () => {
  return (
    <Box>
      <Typography variant="h6">Step 2: Details</Typography>
      <Stack>
        <TextField
          label="Study Space Name"
          name="studySpaceName"
          required={true}
        />
        <TextField
          label="Study Space Type"
          name="studySpaceType"
          required={true}
        />
        <TextField
          label="Study Space Image 2"
          name="studySpaceImage2"
          required={true}
        />
        <TextField
          label="Study Space Image 3"
          name="studySpaceImage3"
          required={true}
        />
      </Stack>
    </Box>
  );
};

export default StudySpaceDetails;
