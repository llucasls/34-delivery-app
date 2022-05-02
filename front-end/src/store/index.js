import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import userReducer from './slices/user';

export const store = configureStore({
  reducer: { userReducer },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
