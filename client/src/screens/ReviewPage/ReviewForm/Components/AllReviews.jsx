import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetReviewsQuery } from "../../../../features/api/apiSlice";

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
          maxWidth: "50vw",
          rowstyle: "flex-wrap",
          textOverflow: "ellipsis",
        }}
      >
        All reviews: {content}
      </Typography>
    </>
  );
};
export default AllReviews;
