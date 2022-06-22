import { createSlice } from "@reduxjs/toolkit";
import IKB from "../shared/images/IKB.jpg";
const initialState = {
  //Study spaces should be object with
  // {
  //     spaceId: String,
  //     details.....
  // }
  studySpaces: [
    {
      id: 1001,
      name: "IKB",
      url: IKB,
    },
  ],
  // Reviews should be object with
  // {
  //      reviewId: String
  //      spaceId: String references a Study Space
  // }
  reviews: [
    {
      id: 1,
      user: "testUser1",
      date: "June 21, 2022",
      spaceId: 1001,
      overall: 4,
      noise: 3.5,
      tableSpace: 4,
      timeLimit: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 1,
      user: "testUser2",
      date: "June 21, 2022",
      spaceId: 1001,
      overall: 3,
      noise: 2.5,
      tableSpace: 5,
      timeLimit: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 1,
      user: "testUser2",
      date: "June 21, 2022",
      spaceId: 1001,
      overall: 3,
      noise: 2.5,
      tableSpace: 5,
      timeLimit: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 1,
      user: "testUser2",
      date: "June 21, 2022",
      spaceId: 1001,
      overall: 3,
      noise: 2.5,
      tableSpace: 5,
      timeLimit: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 1,
      user: "testUser2",
      date: "June 21, 2022",
      spaceId: 1001,
      overall: 3,
      noise: 2.5,
      tableSpace: 5,
      timeLimit: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
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
