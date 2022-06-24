import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TextField } from "mui-rff";

const CommentSection = () => {
  return (
    <Box>
      <Stack>
        <Typography variant="h6">Plese leave other comments here</Typography>
        <TextField label="Other Comments" name="comments" required={true} />
      </Stack>
    </Box>
  );
};

export default CommentSection;
