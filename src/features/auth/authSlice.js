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

export const { createNewUser, setLoading, setError, setIsLoggedIn,singInUser } =
  authSlice.actions;

export default authSlice.reducer;
