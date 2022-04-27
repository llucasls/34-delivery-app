import { createSlice } from '@reduxjs/toolkit';

const ExempleSlice = createSlice({
  name: 'exemple',
  initialState: {
    exemple: '',
  },
  reducers: {
    SET_EXEMPLE: (state, { payload }) => {
      state.exemple = payload;
    },
  },
});

export const { SET_EXEMPLE } = ExempleSlice.actions;

export default ExempleSlice.reducer;
