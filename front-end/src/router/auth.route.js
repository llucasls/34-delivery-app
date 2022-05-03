import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

// pages
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Products from '../pages/Customer/products';

const WelcomeRoute = () => (
  <Switch>
    <Route path="/" exact element={ <Navigate to="/login" /> } />
    <Route
      path="/login"
      exact
      element={ <Login /> }
    />
    <Route path="/register" exact element={ <Register /> } />
    <Route path="/customer/products" exact element={ <Products /> } />
  </Switch>
);

export default WelcomeRoute;
