import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './store';
import Route from './router';
import GlobalStyles from './theme/globals';
import defaultTheme from './theme';

function App() {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ defaultTheme }>
        <GlobalStyles />
        <Route />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
