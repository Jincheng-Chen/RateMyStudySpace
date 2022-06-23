import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ButtonGroupRatings from "./ButtonGroupRatings";
import CommentSection from "./CommentSection";
import StarRating from "./StarRatings";

function NewReview() {
  const value = 5;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "50vw" }}>
      <Stack spacing={2}>
        <br />
        <Typography variant="h6">New Review</Typography>
        <StarRating />
        <ButtonGroupRatings />
        <CommentSection />
      </Stack>
    </Box>
  );
}

export default NewReview;
