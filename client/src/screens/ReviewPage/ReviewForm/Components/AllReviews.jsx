import { Box, Typography } from "@mui/material";
import React from "react";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "../../../../features/api/apiSlice";

const AllReviews = () => {
  const { data, isloading, isSuccess, isError, error } = useGetReviewsQuery();
  let content;
  if (isloading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = JSON.stringify(data);
  } else if (isError) {
    content = <div>Error: {error}</div>;
  }
  return (
    <>
      <Typography
        variant="body1"
        align="center"
        sx={{
          minwidth: "50vw",
          maxWidth: "50vw",
        }}
      >
        All reviews: {content}
      </Typography>
    </>
  );
};
export default AllReviews;
