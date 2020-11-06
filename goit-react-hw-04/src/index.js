import React from 'react';
import ReacDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

ReacDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
