import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sort: "",
  categories: [],
  brands: [],
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
    setCategoriesResult(state, action) {
      const { checked, value } = action.payload || {};
      if (checked) {
        state.categories.push(value);
      } else {
        const index = state.categories.findIndex((item) => item === value);
        state.categories.splice(index, 1);
      }
    },
    setBrandsResult(state, action) {
      const { checked, value } = action.payload || {};
      if (checked) {
        state.brands.push(value);
      } else {
        const index = state.brands.findIndex((item) => item === value);
        state.brands.splice(index, 1);
      }
    },
  },
});

export const {
  setSearchResult,
  setSortResult,
  setCategoriesResult,
  setBrandsResult,
} = productsSlice.actions;

export default productsSlice.reducer;
