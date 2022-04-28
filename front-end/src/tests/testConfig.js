import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import { render as rtlRender } from '@testing-library/react';
// import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
// import userReducer from '../store/slices/user';
import defaultTheme from '../theme';
import { store } from '../store';
import '@testing-library/jest-dom';

// const routeConfig = {}
// const storeConfig = {}

// export const getStore = () => {
//   const store = configureStore({ reducer: { user: userReducer } });

//   return store;
// };

// initialEntries = ['/'],
// history = createMemoryHistory({ initialEntries }),

function render(component) {
  // const store = getStore();
  // const route = routeConfigs.route || '/';
  // const history = routeConfigs.history
  // || createMemoryHistory({ initialEntries: [route] });

  return {
    ...rtlRender(
      <Provider store={ store }>
        <ThemeProvider theme={ defaultTheme }>
          <BrowserRouter>
            {component}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    ),
  };
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
