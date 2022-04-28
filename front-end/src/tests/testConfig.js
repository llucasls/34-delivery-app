import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { render } from '@testing-library/react';

import ExempleSlice from '../store/slices/slice.exemple';

export const getStore = (initialState) => {
  if (!initialState) return configureStore(ExempleSlice, applyMiddleware(thunk));
  return configureStore(ExempleSlice, initialState, applyMiddleware(thunk));
};

export const renderWithRouterAndStore = (component, routeConfigs = {}, initialState) => {
  const route = routeConfigs.route || '/';
  const store = getStore(initialState);
  const history = routeConfigs.history
    || createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>,
    ),
    history,
    store,
  };
};
