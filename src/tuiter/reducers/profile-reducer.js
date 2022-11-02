import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../data/profile.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profileArray,
  reducers: {
    updateName(state, action) {
      profileSlice.firstName = action.payload.firstName
    },
    updateBio(state, action) {
      profileSlice.bio = action.payload.bio
    },
    updateLocation(state, action) {
      profileSlice.location = action.payload.location
    },
    updateWebsite(state, action) {
      profileSlice.website = action.payload.website
    },
    updateDateOfBirth(state, action) {
      profileSlice.dateOfBirth = action.payload.dateOfBirth
    }
  }
});

export const {updateName, updateBio, updateLocation, updateWebsite, updateDateOfBirth} = profileSlice.actions;
export default profileSlice.reducer;