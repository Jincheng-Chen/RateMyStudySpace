import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const useStyles = makeStyles({
  card: {
    padding: "1rem",
  },
});

const ImagePreview = (props) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50vh",
        minWidth: "50vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6">Step 3: Images Preview</Typography>
      <br />
      <Splide
        aria-label="Image preview"
        options={{
          perPage: 2,
          arrows: false,
          pagination: false,
          gap: "1rem",
        }}
      >
        <SplideSlide>
          <img src={props.images.img1} alt="Loading img1" />
        </SplideSlide>
        <SplideSlide>
          <img src={props.images.img2} alt="Loading img2" />
        </SplideSlide>
      </Splide>
    </Box>
  );
};
export default ImagePreview;
