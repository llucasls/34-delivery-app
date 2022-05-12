import React from 'react';
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';

// pages
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import SellerOrders from '../pages/SellerOrders/SellerOrders';
import SellerDetails from '../pages/SellerDetails/SellerDetails';
import Products from '../pages/Products/Products';
import ProductsCheckout from '../pages/ProductsCheckout/ProductsCheckout';
import Admin from '../pages/Admin/Admin';
import ProductsDetails from '../pages/ProductsDetails/ProductsDetails';

const MainRoute = () => {
  const role = JSON.parse(localStorage.getItem('user'))?.role;

  const returnRoleRoute = () => {
    switch (role) {
    case 'seller':
      return (
        <>
          <Route path="/seller/orders" exact element={ <SellerOrders /> } />
          <Route path="/seller/orders/:id" exact element={ <SellerDetails /> } />
        </>
      );
    case 'admin':
      return <Route path="/admin" exact element={ <Admin /> } />;
    default:
      return (
        <>
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/customer/checkout" exact element={ <ProductsCheckout /> } />
          <Route path="/customer/orders/:id" exact element={ <ProductsDetails /> } />
        </>
      );
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={ <Navigate to="/login" /> } />
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/register" exact element={ <Register /> } />
        {returnRoleRoute()}
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoute;
