import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: "idle",
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createNewUser(state, action) {
      state.user = action.payload;
    },
    singInUser(state, action) {
      state.user = action.payload;
    },
    singOutUser(state, action) {
      state.user = null;
      state.loading = "idle";
      state.error = null;
      state.isLoggedIn = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  createNewUser,
  singInUser,
  singOutUser,
  setLoading,
  setError,
  setIsLoggedIn,
} = authSlice.actions;

export default authSlice.reducer;
