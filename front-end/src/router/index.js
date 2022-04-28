import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import AuthRoute from './auth.route';

const MainRoute = () => (
  <BrowserRouter>
    <AuthRoute />
  </BrowserRouter>
);

export default MainRoute;
