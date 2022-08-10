import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "../features/reviewSlice";
import { apiSlice } from "../features/api/apiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    reviews: reviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
