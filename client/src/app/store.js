import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "../features/reviewSlice";
export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
});
