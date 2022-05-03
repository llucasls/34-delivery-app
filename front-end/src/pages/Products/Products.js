import React, { useCallback, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { StyledPage } from './styles';
import ProductCard from '../../components/ProductCard/ProductCard';
import { api } from '../../service/api';
import { useAppDispatch } from '../../store';
import { SET_PRODUCT } from '../../store/slices/products';

const Products = () => {
  const dispatch = useAppDispatch();

  const productsApi = useCallback(async () => {
    try {
      const { data } = await api.get('/products');
      console.log(data);
      dispatch(SET_PRODUCT({ products: data }));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    productsApi();
  }, [productsApi]);

  return (
    <StyledPage>
      <NavBar />
      <ProductCard />
    </StyledPage>
  );
};

export default Products;
