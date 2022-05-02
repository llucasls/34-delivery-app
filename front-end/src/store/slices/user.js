import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      email: '',
      role: '',
    },
  },
  reducers: {
    SET_USER: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { SET_USER } = UserSlice.actions;

export default UserSlice.reducer;
