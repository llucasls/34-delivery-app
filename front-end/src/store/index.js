import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import userReducer from './slices/user';
import ProductCartTotal from './slices/ProductCartTotal';

export const store = configureStore({
  reducer: { userReducer, ProductCartTotal },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
