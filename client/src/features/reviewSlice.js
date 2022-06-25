import { createSlice } from "@reduxjs/toolkit";
import IKB from "../shared/images/IKB.jpg";
import { LOCATION_TYPES } from "../shared/utils";
import TheNest from "../shared/images/TheNest.jpg";
import Breka from "../shared/images/Breka.jpeg";
import TheBoulevard from "../shared/images/TheBoulevard.webp";
import Cafe1 from "../shared/images/cafe1.jpeg";
import Cafe2 from "../shared/images/cafe2.jpeg";
import Cafe3 from "../shared/images/cafe3.jpeg";
import Cafe4 from "../shared/images/cafe4.jpeg";
import Cafe5 from "../shared/images/cafe5.jpeg";
import Cafe6 from "../shared/images/cafe6.jpeg";
import Cafe7 from "../shared/images/cafe7.jpeg";
import Study1 from "../shared/images/cafe-study1.jpeg";
import Study2 from "../shared/images/cafe-study2.webp";
import Study3 from "../shared/images/cafe-study3.jpeg";

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
      type: LOCATION_TYPES.LIBRARY,
      location: "address at street, city, post code",
      photos: [Cafe1, Cafe2, Cafe3, Cafe4],
    },
    {
      id: 1002,
      name: "The Nest",
      url: TheNest,
      type: LOCATION_TYPES.CAFE,
      location: "address at street, city, post code",
      photos: [Cafe5, Cafe6, Cafe7, Study1],
    },
    {
      id: 1003,
      name: "Breka Kitsilano",
      url: Breka,
      type: LOCATION_TYPES.CAFE,
      location: "address at street, city, post code",
      photos: [Study2, Study3, Cafe1, Cafe2],
    },
    {
      id: 1004,
      name: "The Boulevard",
      url: TheBoulevard,
      type: LOCATION_TYPES.CAFE,
      location: "address at street, city, post code",
      photos: [Cafe3, Cafe4, Cafe5, Cafe6],
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      user: "testUser1",
      date: "June 22, 2022",
      spaceId: 1002,
      overall: 4,
      noise: 3.5,
      tableSpace: 4,
      timeLimit: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 7,
      user: "testUser2",
      date: "June 22, 2022",
      spaceId: 1002,
      overall: 3,
      noise: 2.5,
      tableSpace: 5,
      timeLimit: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 8,
      user: "testUser2",
      date: "June 22, 2022",
      spaceId: 1003,
      overall: 3,
      noise: 2.5,
      tableSpace: 5,
      timeLimit: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 9,
      user: "testUser2",
      date: "June 22, 2022",
      spaceId: 1003,
      overall: 3,
      noise: 2.5,
      tableSpace: 5,
      timeLimit: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 10,
      user: "testUser2",
      date: "June 22, 2022",
      spaceId: 1004,
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
    //adds a new space to the space state array
    addNewSpace: (state, action) => {
      state.studySpaces.push(action.payload);
    },
    // adds new url to study space url array
    addNewImage: (state, action) => {
      state.studySpaces
        .find((space) => space.id === action.payload.id)
        .photos.push(action.payload.url);
    },
  },
});

export const { addNewReview, addNewSpace, addNewImage } = reviewSlice.actions;

export default reviewSlice.reducer;
