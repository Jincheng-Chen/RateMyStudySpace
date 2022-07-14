import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studySpaceApiSlice = createApi({
  reducerPath: "studySpaceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Review"],
  endpoints: (builder) => ({
    getStudySpace: builder.query({
      query: (studySpaceId) => `/studySpace/${studySpaceId}`,
      providesTags: ["StudySpace"],
    }),
    getStudySpaceFiltered: builder.query({
      query: (filter, operator, value) =>
        `/studySpace/${filter}/${operator}/${value}`,
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
  }),
});

export const {
  useGetStudySpaceQuery,
  useGetStudySpaceFilteredQuery,
  useAddStudySpaceMutation,
} = studySpaceApiSlice;
