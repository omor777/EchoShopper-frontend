import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sort: "",
  categories: [],
  brands: [],
  priceRange: [],
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
    setPriceRangeResult(state, action) {
      state.priceRange = action.payload;
    },
  },
});

export const {
  setSearchResult,
  setSortResult,
  setCategoriesResult,
  setBrandsResult,
  setPriceRangeResult,
} = productsSlice.actions;

export default productsSlice.reducer;
