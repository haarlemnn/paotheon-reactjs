import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './assets/styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
