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
import ProductsOrders from '../pages/ProductsOrders/ProductsOrders';
import OrderDetails from '../pages/ProductsOrders/OrderDetails/OrderDetails';

const MainRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/checkout" exact element={ <ProductsCheckout /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/seller/orders" exact element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" exact element={ <SellerDetails /> } />
      <Route path="/customer/orders/" exact element={ <ProductsOrders /> } />
      <Route path="/customer/orders/:id" exact element={ <OrderDetails /> } />
      <Route path="/admin/manage" exact element={ <Admin /> } />
    </Switch>
  </BrowserRouter>
);

export default MainRoute;
