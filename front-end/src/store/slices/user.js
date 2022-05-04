import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      email: '',
      role: '',
    },
    isLogged: false,
  },
  reducers: {
    SET_USER: (state, { payload }) => {
      state.user = payload;
    },

    SET_IS_LOGGED: (state, { payload }) => {
      state.isLogged = payload;
    },
  },
});

export const { SET_USER, SET_IS_LOGGED } = UserSlice.actions;

export default UserSlice.reducer;
