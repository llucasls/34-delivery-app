import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import WelcomeRoute from './welcome.route';

const MainRoute = () => (
  <BrowserRouter>
    <WelcomeRoute />
  </BrowserRouter>
);

export default MainRoute;
