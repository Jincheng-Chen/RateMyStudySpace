import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "../features/reviewSlice";
import { apiSlice } from "../features/api/apiSlice";
import { studySpaceApiSlice } from "../features/api/studySpaceApiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [studySpaceApiSlice.reducerPath]: studySpaceApiSlice.reducer,
    reviews: reviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
