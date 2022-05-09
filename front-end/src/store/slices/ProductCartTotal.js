import { createSlice } from '@reduxjs/toolkit';

const ProductCartTotal = createSlice({
  name: 'product_cart_total',
  initialState: {
    amount: 0,
    product_cart_total: 0,
  },
  reducers: {
    SET_ADD_TO_CART: (state, { payload }) => {
      state.product_cart_total = payload.product_cart_total;
    },
    SET_ADD_AMOUNT: (state, { payload }) => {
      state.amount = payload;
    },
  },
});

export const { SET_ADD_TO_CART } = ProductCartTotal.actions;
export const { SET_ADD_AMOUNT } = ProductCartTotal.actions;

export default ProductCartTotal.reducer;
