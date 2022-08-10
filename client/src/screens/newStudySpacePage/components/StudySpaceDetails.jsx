import {
  Box,
  Stack,
  Typography,
  TextField as MuiTextfield,
} from "@mui/material";
import React from "react";
import { Radios, TextField } from "mui-rff";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { Field, OnChange } from "react-final-form";

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
        <Field name="imgLink1">
          {(props) => (
            <div>
              <MuiTextfield
                label="Study Space Image Link 1"
                name={props.input.name}
                value={props.input.value}
                margin="normal"
                sx={{
                  display: "flex",
                }}
                onChange={(e) => {
                  props.input.onChange(e.target.value);
                  setImg1(e.target.value);
                }}
                required={true}
              />
            </div>
          )}
        </Field>
        <Field name="imgLink2">
          {(props) => (
            <div>
              <MuiTextfield
                label="Study Space Image Link 2"
                name={props.input.name}
                value={props.input.value}
                margin="normal"
                sx={{
                  display: "flex",
                }}
                onChange={(e) => {
                  props.input.onChange(e.target.value);
                  setImg2(e.target.value);
                }}
                required={true}
              />
            </div>
          )}
        </Field>

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
