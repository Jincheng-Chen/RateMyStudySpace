// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const studySpaceApiSlice = createApi({
//   reducerPath: "studySpaceApi",
//   baseQuery: fetchBaseQuery(),
//   tagTypes: ["StudySpace"],
//   endpoints: (builder) => ({
//     getStudySpace: builder.query({
//       query: (studySpaceId) => `/studySpace/${studySpaceId}`,
//       providesTags: ["StudySpace"],
//     }),
//     getStudySpaceFiltered: builder.query({
//       query: (filter) =>
//         `/studySpace/${filter.location}/${filter.filter}/${filter.operator}/${filter.value}/${filter.lat}/${filter.lon}/${filter.radius}`,
//       providesTags: ["StudySpace"],
//     }),
//     addStudySpace: builder.mutation({
//       query: (studySpace) => ({
//         url: "/studySpace/addNewStudySpace",
//         method: "POST",
//         body: studySpace,
//       }),
//       invalidatesTags: ["StudySpace"],
//     }),
//     getStudySpacesByLocation: builder.query({
//       query: (location) => `studySpace/getStudySpacesByLocation/${location}`,
//       providesTags: ["StudySpace"],
//     }),
//     addImage: builder.mutation({
//       query: ({ studySpaceId, imageUrl }) => ({
//         url: `/studySpace/addNewImage/${studySpaceId}`,
//         method: "PATCH",
//         body: {
//           image: imageUrl,
//         },
//       }),
//       invalidatesTags: ["StudySpace"],
//     }),
//     getStudySpaceById: builder.query({
//       query: (id) =>  `studySpace/${id}`,
//       providesTags: ['StudySpace']
//     })
//   }),
// });

// export const {
//   useGetStudySpaceQuery,
//   useGetStudySpaceFilteredQuery,
//   useAddStudySpaceMutation,
//   useGetStudySpacesByLocationQuery,
//   useAddImageMutation,
//   useGetStudySpaceByIdQuery
// } = studySpaceApiSlice;
