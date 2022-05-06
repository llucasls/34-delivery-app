import React from 'react';
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';

// components
import { Header } from '../components';

// pages
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import SellerOrders from '../pages/SellerOrders/SellerOrders';
import SellerDetails from '../pages/SellerDetails/SellerDetails';
import Products from '../pages/Products/Products';
import ProductsCheckout from '../pages/ProductsCheckout/ProductsCheckout';
import Admin from '../pages/Admin/Admin';

const MainRoute = () => {
  const role = JSON.parse(localStorage.getItem('user'))?.role;

  const returnRoleRoute = () => {
    switch (role) {
    case 'seller':
      return (
        <>
          <Header />
          <Route path="/seller/orders" exact element={ <SellerOrders /> } />
          <Route path="/seller/orders/:id" exact element={ <SellerDetails /> } />
        </>
      );
    case 'administrator':
      return (
        <Route path="/admin" exact element={ <Admin /> } />
      );
    default:
      return <Route path="/customer/products" element={ <Products /> } />;
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={ <Navigate to="/login" /> } />
        <Route path="/login" exact element={ <Login /> } />
        <Route path="/register" exact element={ <Register /> } />
        <Route path="/customer/checkout" exact element={ <ProductsCheckout /> } />
        {returnRoleRoute()}
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoute;
