import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Review", "StudySpace", "StudySpaceReviews"],
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
    getStudySpace: builder.query({
      query: (studySpaceId) => `/studySpace/${studySpaceId}`,
      providesTags: ["StudySpace"],
    }),
    getStudySpaceFiltered: builder.query({
      query: (filter) =>
        `/studySpace/${filter.location}/${filter.filter}/${filter.operator}/${filter.value}`,
      providesTags: ["StudySpace"],
    }),
    addStudySpace: builder.mutation({
      query: (studySpace) => ({
        url: "/studySpace/addNewStudySpace",
        method: "POST",
        body: studySpace,
      }),
      invalidatesTags: ["StudySpace"],
    }),
    getStudySpacesByLocation: builder.query({
      query: (location) => `studySpace/getStudySpacesByLocation/${location}`,
      providesTags: ["StudySpace"],
    }),
    addImage: builder.mutation({
      query: ({ studySpaceId, imageUrl }) => ({
        url: `/studySpace/addNewImage/${studySpaceId}`,
        method: "PATCH",
        body: {
          image: imageUrl,
        },
      }),
      invalidatesTags: ["StudySpace"],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
  useGetReviewsBySpaceIdQuery,
  useGetStudySpaceQuery,
  useGetStudySpaceFilteredQuery,
  useAddStudySpaceMutation,
  useGetStudySpacesByLocationQuery,
  useAddImageMutation,
} = apiSlice;
