import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createNewUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { createNewUser, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
