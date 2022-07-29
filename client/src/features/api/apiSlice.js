import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["Review", "StudySpaceReviews"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "/reviews",
      providesTags: ["Review"],
    }),
    addReview: builder.mutation({
      query: (review) => ({
        url: "/reviews",
        method: "POST",
        body: review,
      }),
      invalidatesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(
                ({ id }) => (
                  { type: "StudySpaceReviews", id }, "StudySpaceReviews"
                )
              ),
            ]
          : ["StudySpaceReviews"],
    }),
    updateReview: builder.mutation({
      query: (review) => ({
        url: `/reviews/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: ["Review"],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Review"],
    }),
    getReviewsBySpaceId: builder.query({
      query: (id) => `/reviews/studySpace/${id}`,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(
                ({ id }) => (
                  { type: "StudySpaceReviews", id }, "StudySpaceReviews"
                )
              ),
            ]
          : ["StudySpaceReviews"],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
  useGetReviewsBySpaceIdQuery,
} = apiSlice;
