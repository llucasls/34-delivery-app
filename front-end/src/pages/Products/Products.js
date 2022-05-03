import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { StyledPage } from './styles';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => (
  <StyledPage>
    <NavBar />
    <ProductCard />
  </StyledPage>
);

export default Products;
