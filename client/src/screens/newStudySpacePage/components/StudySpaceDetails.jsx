import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Radios, TextField } from "mui-rff";
import ImagePreview from "./ImagePreview";
import { useState } from "react";

const StudySpaceDetails = () => {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3vh",
        marginBottom: "3vh",
      }}
    >
      <Typography variant="h6">Step 2: Details</Typography>
      <Stack>
        <TextField
          label="Study Space Name"
          name="studySpaceName"
          margin="normal"
          required={true}
        />
        <TextField
          label="Study Space Image Link 1"
          name="imgLink1"
          margin="normal"
          required={true}
          onChange={(e) => setImg1(e.target.value)}
          value={img1}
        />
        <TextField
          label="Study Space Image Link 2"
          name="imgLink2"
          margin="normal"
          required={true}
          onChange={(e) => setImg2(e.target.value)}
          value={img2}
        />
        <Typography variant="h6">Sudy Space Type</Typography>
        <Radios
          label="Pick one..."
          name="studySpaceType"
          required={true}
          data={[
            { label: "Library", value: "Library" },
            { label: "Cafe", value: "Cafe" },
          ]}
        />
        <ImagePreview images={{ img1: img1, img2: img2 }} />
      </Stack>
    </Box>
  );
};

export default StudySpaceDetails;
