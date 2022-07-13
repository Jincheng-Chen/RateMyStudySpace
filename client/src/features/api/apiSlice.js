import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "/reviews",
    }),
  }),
});

export const { useGetReviewsQuery } = apiSlice;
