import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sort: "",
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchResult(state, action) {
      state.search = action.payload;
    },
    setSortResult(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setSearchResult, setSortResult } = productsSlice.actions;

export default productsSlice.reducer;
