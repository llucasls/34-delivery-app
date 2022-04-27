import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

// pages
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Regiser';

const WelcomeRoute = () => (
  <Switch>
    <Route path="/" exact element={ <Login /> } />
    <Route path="/register" exact element={ <Register /> } />
  </Switch>
);

export default WelcomeRoute;
