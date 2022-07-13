import { Typography } from "@mui/material";
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
        sx={{
          display: "flex",
          minHeight: "100vh",
          maxWidth: "50vw",
        }}
      >
        all reviews: {content}
      </Typography>
    </>
  );
};
export default AllReviews;
