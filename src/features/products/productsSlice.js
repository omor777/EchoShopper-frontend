import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchResult(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearchResult } = productsSlice.actions;

export default productsSlice.reducer;
