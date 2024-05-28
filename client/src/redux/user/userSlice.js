import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInstart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.error = true;
      state.loading = false;
      state.currentUser = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInFailure, signInSuccess, signInstart } = userSlice.actions;

export default userSlice.reducer;
