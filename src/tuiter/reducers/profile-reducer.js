import { createSlice } from "@reduxjs/toolkit";

const initialProfile = [
  {
    _id: "123",
    firstName: "Elena",
    lastName: "Zhao",
    tweets: 1502,
    handle: "elenazhao",
    profilePicture: "profilePic.jpg",
    bannerPicture: "bannerPic.jpeg",
    bio: "MS in Computer Science at Northeastern University.",
    website: "youtube.com",
    location: "Seattle, WA",
    dateOfBirth: "01/01/1995",
    dateJoined: "03/2016",
    followingCount: 647,
    followersCount: 534
  }
];

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfile,
  reducers: {
    updateProfile(state, action) {
      const userprofile = state.find(
          (userprofile) =>
              action.payload != null
      )
      if (action.payload.firstName != null) {
        userprofile.firstName = action.payload.firstName
        userprofile.handle = action.payload.firstName
      }
      if (action.payload.bio != null) {
        userprofile.bio = action.payload.bio
      }
      if (action.payload.location != null) {
        userprofile.location = action.payload.location
      }
      if (action.payload.website != null) {
        userprofile.website = action.payload.website
      }
      if (action.payload.dateOfBirth != null) {
        userprofile.dateOfBirth = action.payload.dateOfBirth
      }
    }
  }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;