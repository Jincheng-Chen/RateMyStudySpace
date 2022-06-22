import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Study spaces should be object with
  // {
  //     spaceId: String,
  //     details.....
  // }
  studySpaces: [],
  // Reviews should be object with
  // {
  //      reviewId: String
  //      spaceId: String references a Study Space
  // }
  reviews: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    // adds a new review to the reviews state array
    addNewReview: (state, action) => {
      state.reviews.push(action.payload);
    },
    //addes a new space to the space state array
    addNewSpace: (state, action) => {
      state.studySpaces.push(action.payload);
    },
  },
});

export const { addNewReview, addNewSpace } = reviewSlice.actions;

export default reviewSlice.reducer;
