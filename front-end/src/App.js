import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './store';
import defaultTheme from './theme';
import Route from './router';

function App() {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ defaultTheme }>
        <Route />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
