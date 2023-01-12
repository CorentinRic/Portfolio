import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop';
import App from './App';
import ThemeContextProvider from './utils/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter  basename='/Portfolio'>
  <ScrollToTop />
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  </BrowserRouter>
);