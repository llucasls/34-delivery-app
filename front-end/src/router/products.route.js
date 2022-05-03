import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

// pages
import Products from '../pages/Products/Products';

const CustomerRoute = () => (
  <Switch>
    <Route path="/customer/products" exact element={ <Products /> } />
  </Switch>
);

export default CustomerRoute;
