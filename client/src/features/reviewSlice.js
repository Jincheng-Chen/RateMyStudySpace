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
    //adds a new space to the space state array
    addNewSpace: (state, action) => {
      state.studySpaces.push(action.payload);
    },
    // adds new url to study space url array
    addNewImage: (state, action) => {
      console.log(action.payload);
      const index = state.studySpaces.findIndex(
        (space) => space.id === action.payload.id
      );
      state.studySpaces[index].photos
        ? state.studySpaces[index].photos.push(action.payload.url)
        : (state.studySpaces[index].photos = [action.payload.url]);
    },
    setReviews: (state, action) => {
      state.studySpaces = action.payload;
    }
  },
});

export const { addNewReview, addNewSpace, addNewImage, setReviews } = reviewSlice.actions;

export default reviewSlice.reducer;
