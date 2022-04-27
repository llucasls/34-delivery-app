import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home/Home';

const WelcomeRoute = () => (
  <Switch>
    <Route path="/" exact element={ <Home /> } />
  </Switch>
);

export default WelcomeRoute;
