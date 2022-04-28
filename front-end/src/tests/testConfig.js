import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import defaultTheme from '../theme';
import { store } from '../store';
import '@testing-library/jest-dom';

function render(component) {
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
