import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "/reviews",
    }),
    addReview: builder.mutation({
      query: (review) => ({
        url: "/reviews",
        method: "POST",
        body: review,
      }),
    }),
    updateReview: builder.mutation({
      query: (review) => ({
        url: `/reviews/${review.id}`,
        method: "PATCH",
        body: review,
      }),
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} = apiSlice;
