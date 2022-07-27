import React from "react";
import { Card, Typography, Box } from "@mui/material";

const ImagePreview = () => {
  return (
    <Box>
      <Typography variant="h6">Step 3: Images Preview</Typography>
      <Card>
        <img src="https://picsum.photos/333" alt="" />
        <img src="https://picsum.photos/333" alt="" />
      </Card>
    </Box>
  );
};
export default ImagePreview;
