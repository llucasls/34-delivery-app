import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import userReducer from './slices/user';
import productsReducer from './slices/products';

export const store = configureStore({
  reducer: { userReducer, productsReducer },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
