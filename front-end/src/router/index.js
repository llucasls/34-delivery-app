import React from 'react';
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';

// pages
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import SellerRequest from '../pages/SellerRequests/SellerRequests';
import SellerDetails from '../pages/SellerDetails/SellerDetails';

const MainRoute = () => {
  const role = JSON.parse(localStorage.getItem('user'))?.role;

  const returnRoleRoute = () => {
    switch (role) {
    case 'seller':
      return (
        <>
          <Route path="/seller/orders" exact element={ <SellerRequest /> } />
          <Route path="/seller/orders/:id" exact element={ <SellerDetails /> } />
        </>
      );
    case 'admin':
      return <Route path="/" exact element={ <Home /> } />;
    default:
      return <Route path="/" exact element={ <Home /> } />;
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
