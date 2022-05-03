import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    SET_PRODUCT: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { SET_PRODUCT } = ProductSlice.actions;

export default ProductSlice.reducer;
