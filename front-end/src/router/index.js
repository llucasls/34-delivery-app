import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import AuthRoute from './auth.route';
import CustomerRoute from './products.route';

const MainRoute = () => (
  <BrowserRouter>
    <AuthRoute />
    <CustomerRoute />
  </BrowserRouter>
);

export default MainRoute;
