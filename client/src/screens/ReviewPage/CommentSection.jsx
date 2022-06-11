import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TextField } from "@mui/material";

const CommentSection = () => {
  return (
    <Box>
      <Stack>
        <Typography variant="h6">Plese leave other comments here</Typography>
        <TextField
          sx={{
            minHeight: "50vh",
          }}
        ></TextField>
      </Stack>
    </Box>
  );
};

export default CommentSection;
